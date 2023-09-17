import { Link } from "react-router-dom";
import { Product } from "../utils/interface";

interface ProductListProps {
  products: Product[];
  onDelete: (product: Product) => void;
}

const ProductList = ({ products, onDelete }: ProductListProps) => {
  return (
    <div>
      <ul>
        {products.map((product, index) => (
          <li key={index} className='border rounded-lg p-4 mb-4 '>
            <div className='flex justify-between items-center mb-2'>
              <h3 className='text-lg font-semibold'>{product.name}</h3>
              {product.id && (
                <div>
                  <button className='text-blue-900 border border-blue-900 rounded px-1  hover:bg-blue-900 hover:text-white mr-2'>
                    <Link to={"/products/" + product.id}>Edit</Link>
                  </button>
                  <button
                    className='border border-red-700 rounded px-1  text-red-700 hover:bg-red-700 hover:text-white'
                    onClick={() => onDelete(product)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
            <p className='text-gray-600'>
              Status: {product.status == "AC" ? "Active" : "Inactive"}
            </p>
            {product.categories && (
              <>
                <p className='text-gray-600'>Categories:</p>

                <ul className='list-disc pl-6'>
                  {product.categories.map((category) => (
                    <li key={category.id} className='text-gray-600'>
                      {category.name}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {product.images && product.images.length > 0 && (
              <img
                src={product.images[0].image}
                alt={`Imagen 1 de ${product.name}`}
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
