import React from "react";
import PageContainer from "../../components/PageContainer";
import PageTitle from "../../components/PageTitle";
import { useState } from "react";
import { Category, Image, Product } from "../../utils/interface";
import { createProduct } from "../../utils/service";
import { toast } from "react-toastify";
import { STATUS_OPTIONS } from "../../utils/constants";
import AddListItems from "../../components/AddListItems";

function CreateProductPage() {
  const [form, setForm] = useState<Product>({} as Product);
  const [categories, setCategories] = useState<Category[]>([]);
  const [images, setImages] = useState<Image[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    console.log("name", { name, value });
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
    const imagesFiltered = images.filter((img) => img.image !== name);
    setImages(imagesFiltered);
  };
  const handleOnSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const { data, error } = await createProduct({
      ...form,
      images,
      categories,
    });
    if (data) {
      toast.success("Product created successfully!!");
    } else {
      toast.error(error);
    }
  };

  return (
    <PageContainer>
      <PageTitle title='New product' />

      <form className='flex flex-col gap-7' onSubmit={handleOnSubmit}>
        <div className='flex flex-col gap-2'>
          <label htmlFor='name' className='text-gray-700 font-semibold'>
            Name:
          </label>
          <input
            required
            type='text'
            id='name'
            name='name'
            value={form.name || ""}
            onChange={handleInputChange}
            className='px-3 py-2 border bg-gray-200 max-w-md rounded-md'
          />
        </div>
        <div className='flex flex-col gap-2 '>
          <label htmlFor='name' className='text-gray-700 font-semibold'>
            Status:
          </label>
          <select
            required
            name='status'
            defaultValue={""}
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
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-5'>
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

        <div className='grid grid-cols-1 md:grid-cols-2 mt-12'>
          <button
            type='submit'
            className='md:col-start-2 bg-orange-500 rounded-md text-white font-bold px-4 py-2 '
          >
            Create
          </button>
        </div>
      </form>
    </PageContainer>
  );
}

export default CreateProductPage;
