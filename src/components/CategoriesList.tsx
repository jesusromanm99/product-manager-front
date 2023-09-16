import React, { useState } from "react";
type props = {
  categories: string[];
  onRemove: (category: string) => void;
  onAdd: (name: string) => void;
};
function CategoriesList({ categories, onRemove, onAdd }: props) {
  const [newCategory, setNewCategory] = useState("");
  return (
    <div>
      <div className='flex flex-col gap-2'>
        <label className='text-gray-700 font-semibold'>Add category</label>
        <div className='space-x-2'>
          <input
            value={newCategory}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewCategory(e.target.value)}
            className='px-3 py-2 border bg-gray-200 max-w-md '
            placeholder='Add categories'
          />
          <button
            onClick={() => onAdd(newCategory)}
            className='bg-green-800 px-3 py-1 text-white font-bold rounded-md text-sm'
          >
            {" "}
            Add
          </button>
        </div>
      </div>
      <p className='text-gray-700 font-semibold mt-3'>Categories:</p>
      <ul className='mt-3 '>
        {categories.length !== 0 ? (
          categories.map((category, index) => (
            <li key={index} className='grid grid-cols-3 gap-4 mr-3 my-2 items-center '>
              <span className='text-gray-800 text-lg col-span-2'> {category}</span>
              <button
                onClick={() => onRemove(category)}
                className='bg-red-800 px-2 py-1  text-white text-sm font-bold rounded-md'
              >
                Remove
              </button>
            </li>
          ))
        ) : (
          <li className='bg-gray-100 px-3 py-1 rounde inline-block my-2 border'>
            No categories added
          </li>
        )}
      </ul>
    </div>
  );
}

export default CategoriesList;
