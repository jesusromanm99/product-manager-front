import React, { useState } from "react";
type props = {
  images: string[];
  onRemove: (img: string) => void;
  onAdd: (name: string) => void;
};
function ImageList({ images, onRemove, onAdd }: props) {
  const [newImage, setNewImage] = useState("");
  return (
    <div>
      <div className='flex flex-col gap-2'>
        <label className='text-gray-700 font-semibold'>Add image's url</label>
        <div className='space-x-2'>
          <input
            value={newImage}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewImage(e.target.value)}
            className='px-3 py-2 border bg-gray-200 max-w-md '
            placeholder='Add categories'
          />
          <button
            onClick={() => onAdd(newImage)}
            className='bg-green-800 px-3 py-1 text-white font-bold rounded-md text-sm'
          >
            {" "}
            Add
          </button>
        </div>
      </div>
      <p className='text-gray-700 font-semibold mt-3'>Images:</p>
      <ul className='mt-3 '>
        {images.length !== 0 ? (
          images.map((img, index) => (
            <li key={index} className='grid grid-cols-3 gap-4 mr-3 my-2  items-center '>
              <span className='text-gray-800 text-lg col-span-2'> {img}</span>
              <button
                onClick={() => onRemove(img)}
                className='bg-red-800 px-2 py-1  text-white text-sm font-bold rounded-md'
              >
                Remove
              </button>
            </li>
          ))
        ) : (
          <li className='bg-gray-100 px-3 py-1 rounde inline-block my-2 border'>No images added</li>
        )}
      </ul>
    </div>
  );
}

export default ImageList;
