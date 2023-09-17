// App.tsx

import { useEffect, useState } from "react";
import PageContainer from "../../components/PageContainer";
import PageTitle from "../../components/PageTitle";
import ProductFilters from "../../components/ProductFilters";
import ProductList from "../../components/ProductList";
import { FiltersProduct, GetProductsParams, Product } from "../../utils/interface";
import { deleteProduct, getProducts } from "../../utils/service";
import { toast } from "react-toastify";

function ProductListPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const getProducts_ = async (params: GetProductsParams) => {
    const { data, error } = await getProducts(params);
    if (data) {
      console.log({ data });
      setProducts(data);
    } else {
      toast.error(error);
    }
  };
  useEffect(() => {
    getProducts_({});
  }, []);

  const handleDelete = async (deletedProduct: Product) => {
    // Implement deletion logic here, e.g., show a confirmation dialog
    const { error } = await deleteProduct({ id: deletedProduct.id });
    if (error) toast.error(error);
    else {
      setProducts(products.filter((product) => product.id !== deletedProduct.id));
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
    await getProducts_(params);
  };
  return (
    <PageContainer>
      <PageTitle title='Products list' />
      <ProductFilters
        onFilter={handleFilter}
        categories={new Set(products.map((product) => product.name))}
      />
      <ProductList products={products} onDelete={handleDelete} />
    </PageContainer>
  );
}

export default ProductListPage;
