// App.tsx

import { useState } from "react";
import PageContainer from "../../components/PageContainer";
import PageTitle from "../../components/PageTitle";
import ProductFilters from "../../components/ProductFilters";
import ProductList from "../../components/ProductList";
import { FiltersProduct, Product } from "../../utils/interface";

const products = [
  {
    id: 26,
    categories: [
      {
        id: 10,
        name: "Fruit",
      },
      {
        id: 11,
        name: "Red",
      },
    ],
    images: [
      {
        image: "https://example.com/image1.jpg",
      },
    ],
    name: "Apple",
    status: "AC",
  },
  {
    id: 27,
    categories: [
      {
        id: 10,
        name: "Fruit",
      },
      {
        id: 11,
        name: "Red",
      },
    ],
    images: [
      {
        image: "https://example.com/image1.jpg",
      },
    ],
    name: "Cherry",
    status: "AC",
  },
  {
    id: 28,
    categories: [
      {
        id: 10,
        name: "Fruit",
      },
      {
        id: 12,
        name: "Orange",
      },
    ],
    images: [
      {
        image: "https://example.com/image1.jpg",
      },
    ],
    name: "Orange",
    status: "IN",
  },
  {
    id: 29,
    categories: [
      {
        id: 10,
        name: "Fruit",
      },
      {
        id: 11,
        name: "Red",
      },
    ],
    images: [
      {
        image: "https://example.com/image1.jpg",
      },
      {
        image: "https://example.com/image2.jpg",
      },
    ],
    name: "Cherry",
    status: "AC",
  },
  // Add more product data here...
];

function ProductListPage() {
  const handleEdit = (editedProduct: Product) => {
    // Implement editing logic here, e.g., open a modal for editing
    console.log("Editing product:", editedProduct);
  };

  const handleDelete = (deletedProduct: Product) => {
    // Implement deletion logic here, e.g., show a confirmation dialog
    console.log("Deleting product:", deletedProduct);
  };

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const handleFilter = (filters: FiltersProduct) => {
    // Apply filtering logic here
    const filtered = products.filter((product) => {
      const nombreMatch = product.name.toLowerCase().includes(filters.name.toLowerCase());
      const estadoMatch = product.status.toLowerCase().includes(filters.status.toLowerCase());
      const categoriasMatch =
        filters.category === "" ||
        product.categories.some(
          (category) => category.name.toLowerCase() === filters.category.toLowerCase()
        );
      return nombreMatch && estadoMatch && categoriasMatch;
    });
    setFilteredProducts(filtered);
  };
  return (
    <PageContainer>
      <PageTitle title='Lista de Productos' />
      <ProductFilters
        onFilter={handleFilter}
        categories={products.map((product) => product.name)}
      />
      <ProductList products={filteredProducts} onEdit={handleEdit} onDelete={handleDelete} />
    </PageContainer>
  );
}

export default ProductListPage;
