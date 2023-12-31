import React, { useState } from "react";
import { Category } from "../utils/interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faTrash } from "@fortawesome/free-solid-svg-icons";
type props = {
  categories: Category[];
  onRemove: (category: string) => void;
  onAdd: (name: string) => void;
};
function CategoriesList({ categories, onRemove, onAdd }: props) {
  const [newCategory, setNewCategory] = useState("");
  const handleOnAdd = (newCategory: string) => {
    setNewCategory("");
    onAdd(newCategory);
  };
  return (
    <div className=' rounded-lg'>
      <div className='flex flex-col gap-2'>
        <label className='text-gray-700 font-semibold'>Categories:</label>
        <div className='flex space-x-2'>
          <input
            value={newCategory}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewCategory(e.target.value)}
            className='px-3 py-2 border bg-gray-200 max-w-md rounded-md '
            placeholder='Add category'
          />
          <button
            disabled={newCategory == ""}
            type='button'
            onClick={() => handleOnAdd(newCategory)}
            className='bg-green-800 px-3  text-white font-bold rounded-md text-sm'
          >
            <FontAwesomeIcon icon={faAdd} className='text-white' /> Add
          </button>
        </div>
      </div>
      <ul className=' '>
        {categories.length !== 0 ? (
          categories.map((category, index) => (
            <li key={index} className='flex  gap-4 mr-3 my-2  border-b py-2 '>
              <span className='grow text-gray-800 text-lg col-span-2 overflow-x-clip'>
                {" "}
                {category.name}
              </span>
              <button
                type='button'
                onClick={() => onRemove(category.name)}
                className='bg-red-800 px-2 py-1  text-white text-sm font-bold rounded-md'
              >
                <FontAwesomeIcon icon={faTrash} className='text-white' />
              </button>
            </li>
          ))
        ) : (
          <li className='text-center bg-gray-100 text-gray-600 font-semibold px-3 py-1 rounde  my-2 border'>
            No categories added
          </li>
        )}
      </ul>
    </div>
  );
}

export default CategoriesList;
