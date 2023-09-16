// ProductFilter.tsx
import React, { useState } from "react";
import { FiltersProduct } from "../utils/interface";

interface FilterProps {
  onFilter: (filters: FiltersProduct) => void;
  categories: string[];
}

const ProductFilters = ({ onFilter, categories }: FilterProps) => {
  const initialFilters: FiltersProduct = {
    name: "",
    status: "",
    category: "",
  };

  const [filters, setFilters] = useState(initialFilters);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    console.log({ name, value });
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleApplyFilter = () => {
    onFilter(filters);
  };

  return (
    <div className='mb-5'>
      <input
        type='text'
        name='nombre'
        placeholder='Filter by name'
        onChange={handleFilterChange}
        className='border rounded-md px-2 py-1'
      />
      <input
        type='text'
        name='estado'
        placeholder='Filter by status'
        onChange={handleFilterChange}
        className='border rounded-md px-2 py-1 ml-2'
      />
      <select
        name='categorias'
        onChange={handleFilterChange}
        defaultValue={""}
        className='border bg-white rounded-md px-2 py-1 ml-2'
      >
        <option value={""} disabled>
          Filter by category
        </option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button
        onClick={handleApplyFilter}
        className='bg-orange-600 hover:bg-orange-800 text-white px-2 py-1 ml-2 rounded-md'
      >
        Apply
      </button>
    </div>
  );
};

export default ProductFilters;
