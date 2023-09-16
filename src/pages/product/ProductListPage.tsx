// App.tsx

import PageContainer from "../../components/PageContainer";
import ProductList from "../../components/ProductList";

const products = [
  {
    Nombre: "Product 1",
    Estado: "Active",
    Categorías: [
      { id: 1, name: "Category A" },
      { id: 2, name: "Category B" },
    ],
    Imágenes: [
      { id: 1, url: "image1.jpg" },
      { id: 2, url: "image2.jpg" },
    ],
  },
  {
    Nombre: "Product 2",
    Estado: "Inactive",
    Categorías: [
      { id: 1, name: "Category A" },
      { id: 3, name: "Category C" },
    ],
    Imágenes: [],
  },
  // Add more product data here...
];

function App() {
  return (
    <PageContainer>
      <ProductList products={products} />
    </PageContainer>
  );
}

export default App;
