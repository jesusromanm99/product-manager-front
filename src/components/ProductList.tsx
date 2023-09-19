import { Link } from "react-router-dom";
import { Product } from "../utils/interface";
import ProductStatus from "./ProductStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faRemove } from "@fortawesome/free-solid-svg-icons";

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
            <div className='flex gap-2 justify-between items-center mb-2 flex-wrap'>
              <div className='flex justify-evenly md:justify-start gap-2 items-center'>
                <h3 className='text-xl font-semibold'>{product.name} </h3>
                <ProductStatus status={product.status} />
              </div>
              {product.id && (
                <div>
                  <Link to={"/products/" + product.id}>
                    <button className='px-3 py-1 text-blue-900 border border-blue-900 rounded  hover:bg-blue-900 hover:text-white mr-2'>
                      <FontAwesomeIcon icon={faEdit} /> Edit
                    </button>
                  </Link>

                  <button
                    className='px-3 py-1 border border-red-700 rounded  text-red-700 hover:bg-red-700 hover:text-white'
                    onClick={() => onDelete(product)}
                  >
                    <FontAwesomeIcon icon={faRemove} className='mr-1' />
                    Delete
                  </button>
                </div>
              )}
            </div>

            {product.categories && (
              <>
                <p className='text-lg mb-1'>Categories:</p>

                <ul className=' pl-6 flex gap-1'>
                  {product.categories.map((category) => (
                    <li
                      key={category.id}
                      className=' bg-orange-100  px-3 rounded-xl text-orange-600'
                    >
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
                className='mt-4 rounded-md object-contain h-36 w-28 border'
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
