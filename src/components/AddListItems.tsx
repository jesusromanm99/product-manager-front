import React, { useState } from "react";
//import { Category, Image } from "../utils/interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faTrash } from "@fortawesome/free-solid-svg-icons";
type props = {
  items: string[];
  placeholder: string;
  emptyMessage: string;
  label: string;
  onRemove: (item: string) => void;
  onAdd: (item: string) => void;
};
function AddListItems({ items, onRemove, onAdd, label, placeholder, emptyMessage }: props) {
  const [newItem, setNewItem] = useState("");
  const handleOnAdd = (newItem: string) => {
    setNewItem("");
    onAdd(newItem);
  };
  return (
    <div className=' rounded-lg'>
      <div className='flex flex-col gap-2'>
        <label className='text-gray-700 font-semibold'>{label}:</label>
        <div className='flex space-x-2'>
          <input
            value={newItem}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewItem(e.target.value)}
            className='px-3 py-2 border bg-gray-200 max-w-md rounded-md '
            placeholder={placeholder}
          />
          <button
            disabled={newItem == ""}
            type='button'
            onClick={() => handleOnAdd(newItem)}
            className='bg-green-800 px-3  text-white font-bold rounded-md text-sm'
          >
            <FontAwesomeIcon icon={faAdd} className='text-white' /> Add
          </button>
        </div>
      </div>
      <ul className=' '>
        {items.length !== 0 ? (
          items.map((item, index) => (
            <li key={index} className='flex  gap-4 mr-3 my-2  border-b py-2 '>
              <span className='grow text-gray-800 text-lg col-span-2 overflow-x-clip'> {item}</span>
              <button
                type='button'
                onClick={() => onRemove(item)}
                className='bg-red-800 px-2 py-1  text-white text-sm font-bold rounded-md'
              >
                <FontAwesomeIcon icon={faTrash} className='text-white' />
              </button>
            </li>
          ))
        ) : (
          <li className='text-center bg-gray-100 text-gray-600 font-semibold px-3 py-1 rounde  my-2 border'>
            {emptyMessage}
          </li>
        )}
      </ul>
    </div>
  );
}

export default AddListItems;
