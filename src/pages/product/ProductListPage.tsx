// App.tsx

import { useEffect, useState } from "react";
import PageContainer from "../../components/PageContainer";
import PageTitle from "../../components/PageTitle";
import ProductFilters from "../../components/ProductFilters";
import ProductList from "../../components/ProductList";
import { FiltersProduct, GetProductsParams, Product, RProduct } from "../../utils/interface";
import { deleteProduct, getProducts } from "../../utils/service";
import { toast } from "react-toastify";
import { useNavigate, useSearchParams } from "react-router-dom";
import Pagination from "../../components/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

function ProductListPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [results, setResults] = useState<RProduct>({} as RProduct);
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);

  useEffect(() => {
    getProducts_({ page });
  }, []);

  const getProducts_ = async (params: GetProductsParams) => {
    const { data, error } = await getProducts(params);
    if (data) {
      setResults(data);
    } else {
      toast.error(error);
    }
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= results.count) {
      setPage(newPage);
      getProducts_({ page: newPage });
      navigate(`/products?page=${newPage}`);
    }
  };
  const handleDelete = async (deletedProduct: Product) => {
    // Implement deletion logic here, e.g., show a confirmation dialog
    const { error } = await deleteProduct({ id: deletedProduct.id });
    if (error) toast.error(error);
    else {
      getProducts_({ page: 1 });
      navigate(`/products?page=${1}`);
      setPage(1);
      const filter = results.results.filter((product) => product.id !== deletedProduct.id);
      setResults({ ...results, results: filter });
      toast.success("Product deleted successfully");
    }
  };

  const handleFilter = async (filters: FiltersProduct) => {
    // Apply filtering logic here
    const params = {
      ...(filters.name !== "" && { name: filters.name }),
      ...(filters.category !== "" && { category: filters.category }),
      ...(filters.status !== "" && { status: filters.status }),
    };
    setPage(1);
    navigate(`/products?page=${1}`);
    await getProducts_({ ...params, page: 1 });
  };
  return (
    <PageContainer>
      <div className='flex flex-col md:flex-row justify-between flex-wrap  mb-4'>
        <div>
          <PageTitle title='Products list' />
          <button
            onClick={() => navigate("/products/create")}
            className='ml-5 bg-orange-500 text-white rounded-md px-3 py-1  '
          >
            <FontAwesomeIcon icon={faAdd} className='mr-2' />
            New Product
          </button>
        </div>
        <Pagination
          handlePageChange={handlePageChange}
          totalPages={results.count}
          page={page}
          hasNextPage={!!results.next}
          hasPrevPage={!!results.previous}
        />
      </div>
      <ProductFilters
        onFilter={handleFilter}
        categories={new Set(results?.results?.map((product) => product.name))}
      />
      <ProductList products={results?.results || []} onDelete={handleDelete} />
    </PageContainer>
  );
}

export default ProductListPage;
