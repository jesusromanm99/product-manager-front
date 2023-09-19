import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import PageContainer from "../../components/PageContainer";
import PageTitle from "../../components/PageTitle";
import { useState } from "react";
import { Category, Image, Product } from "../../utils/interface";
import { getProductById, updateProduct } from "../../utils/service";
import { toast } from "react-toastify";
import { STATUS_OPTIONS } from "../../utils/constants";
import AddListItems from "../../components/AddListItems";

function EditProductPage() {
  const { id } = useParams();
  const [editedProduct, setEditedProduct] = useState<Product>({} as Product);
  const [categories, setCategories] = useState<Category[]>([]);
  const [images, setImages] = useState<Image[]>([]);

  const getProductDetail = async () => {
    const { data, error } = await getProductById({ id });
    if (data) {
      setEditedProduct(data);
      setCategories(data.categories);
      setImages(data.images);
    } else {
      toast.error(error);
    }
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditedProduct({
      ...editedProduct,
      [name]: value,
    });
  };
  const handleAddCategory = (name: string) => {
    if (categories.find((category) => category.name.toLowerCase() == name.toLocaleLowerCase()))
      toast.warning("Category already added.");
    else setCategories([...categories, { name }]);
  };
  const handleRemoveCategory = (name: string) => {
    const categoriesFiltered = categories.filter((category) => category.name !== name);
    setCategories(categoriesFiltered);
  };
  const handleAddImage = (image: string) => {
    try {
      new URL(image);
      setImages([...images, { image }]);
    } catch (err) {
      toast.warning("Enter a valid url.");
    }
  };
  const handleRemoveImage = (name: string) => {
    console.log("img", name, images);
    const imagesFiltered = images.filter((img) => img.image !== name);
    setImages(imagesFiltered);
  };
  const handleOnSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("heree");
    const { data, error } = await updateProduct({
      ...editedProduct,
      images,
      categories,
    });
    if (data) {
      toast.success("Product edited successfully!!");
    } else {
      toast.error(error);
    }
  };

  return (
    <PageContainer>
      <PageTitle title='Edit product' />
      <form className='space-y-3' onSubmit={handleOnSubmit}>
        <div className='flex flex-col gap-2'>
          <label htmlFor='name' className='text-gray-700 font-semibold'>
            Name:
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={editedProduct.name || ""}
            onChange={handleInputChange}
            className='px-3 py-2 border bg-gray-200 max-w-md rounded-md'
          />
        </div>
        <div className='flex flex-col gap-2 '>
          <label htmlFor='name' className='text-gray-700 font-semibold'>
            Status:
          </label>
          <select
            name='status'
            defaultValue={editedProduct.status}
            onChange={handleInputChange}
            className='px-3 py-2 border bg-gray-200 max-w-md rounded-md'
          >
            <option value={""} disabled>
              Select an option
            </option>
            {STATUS_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className='grid grid-cols-2 gap-x-5'>
          <AddListItems
            items={categories.map((category) => category.name)}
            placeholder='Add category'
            label='Categories'
            emptyMessage='No categories added'
            onAdd={handleAddCategory}
            onRemove={handleRemoveCategory}
          />
          <AddListItems
            items={images.map((img) => img.image)}
            placeholder='Add image'
            label='Images'
            emptyMessage='No images added'
            onAdd={handleAddImage}
            onRemove={handleRemoveImage}
          />
        </div>
        {/* Additional fields for Categorías and Imágenes */}

        <div className='grid grid-cols-2 mt-12'>
          <button
            type='submit'
            className='col-start-2 bg-orange-500 rounded-md text-white font-bold px-4 py-2 '
          >
            Save
          </button>
        </div>
      </form>
    </PageContainer>
  );
}

export default EditProductPage;
