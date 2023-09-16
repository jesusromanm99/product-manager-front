//import { useParams } from "react-router-dom";
import React from "react";
import PageContainer from "../../components/PageContainer";
import PageTitle from "../../components/PageTitle";
import { useState } from "react";
import { Product } from "../../utils/interface";
import CategoriesList from "../../components/CategoriesList";
import ImageList from "../../components/ImageList";
const product = {
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
};
function EditProductPage() {
  //const { id } = useParams();
  const [editedProduct, setEditedProduct] = useState<Product>(product);
  const [categories, setCategories] = useState(
    editedProduct.categories.map((category) => category.name)
  );
  const [images, setImages] = useState(editedProduct.images.map((image) => image.image));
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedProduct({
      ...editedProduct,
      [name]: value,
    });
  };
  const handleAddCategory = (name: string) => {
    setCategories([...categories, name]);
  };
  const handleRemoveCategory = (name: string) => {
    const categoriesFiltered = categories.filter((category) => category !== name);
    setCategories(categoriesFiltered);
  };
  const handleAddImage = (name: string) => {
    setImages([...images, name]);
  };
  const handleRemoveImage = (name: string) => {
    const imagesFiltered = images.filter((img) => img !== name);
    setImages(imagesFiltered);
  };
  const handleOnSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };
  const handleSave = () => {
    console.log("save");
  };
  return (
    <PageContainer>
      <PageTitle title='Edit product' />
      <form className='' onSubmit={handleOnSubmit}>
        <div className='flex flex-col gap-2'>
          <label htmlFor='name' className='text-gray-700 font-semibold'>
            Name:
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={editedProduct.name}
            onChange={handleInputChange}
            className='px-3 py-2 border bg-gray-200 max-w-md'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='status' className='text-gray-700 font-semibold'>
            Status:
          </label>
          <input
            type='text'
            id='status'
            name='status'
            value={editedProduct.status}
            onChange={handleInputChange}
            className='px-3 py-2 border bg-gray-200 max-w-md'
          />
        </div>
        <div className='grid grid-cols-2 gap-x-5'>
          <CategoriesList
            categories={categories}
            onAdd={handleAddCategory}
            onRemove={handleRemoveImage}
          />

          <ImageList images={images} onAdd={handleAddImage} onRemove={handleRemoveCategory} />
        </div>
        {/* Additional fields for Categorías and Imágenes */}

        <div className='grid grid-cols-2 mt-12'>
          <button
            onClick={handleSave}
            className='col-start-2 bg-orange-500 rounded-md text-white font-bold px-4 py-2 rounded-sm '
          >
            Save
          </button>
        </div>
      </form>
    </PageContainer>
  );
}

export default EditProductPage;
