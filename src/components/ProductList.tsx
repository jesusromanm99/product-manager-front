import { Product } from "../utils/interface";
import PageTitle from "./PageTitle";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div>
      <PageTitle title='lista de Productos' />
      <ul>
        {products.map((product, index) => (
          <li key={index} className='border rounded-lg p-4 mb-4 shadow-md'>
            <h3 className='text-lg font-semibold'>{product.Nombre}</h3>
            <p className='text-gray-600'>Estado: {product.Estado}</p>
            <p className='text-gray-600'>Categorías:</p>
            <ul className='list-disc pl-6'>
              {product.Categorías.map((categoria) => (
                <li key={categoria.id} className='text-gray-600'>
                  {categoria.name}
                </li>
              ))}
            </ul>
            {product.Imágenes.length > 0 && (
              <img
                src={product.Imágenes[0].url}
                alt={`Imagen 1 de ${product.Nombre}`}
                className='mt-4 rounded-md'
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
