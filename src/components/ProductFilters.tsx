// ProductFilter.tsx
import React, { useState } from "react";
import { FiltersProduct } from "../utils/interface";
import { STATUS_OPTIONS } from "../utils/constants";

interface FilterProps {
  onFilter: (filters: FiltersProduct) => void;
  categories: Set<string>;
}

const ProductFilters = ({ onFilter }: FilterProps) => {
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
    <div className='mb-5 flex flex-col md:flex-row gap-2'>
      <input
        type='text'
        name='name'
        placeholder='Filter by name'
        onChange={handleFilterChange}
        className='border rounded-md px-2 py-1'
      />
      <select
        name='status'
        defaultValue={"select"}
        onChange={handleFilterChange}
        className='border rounded-md px-2 py-1 '
      >
        <option value={"select"} disabled>
          Select an option
        </option>
        {STATUS_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
        <option value={""}>All</option>
      </select>

      <input
        type='text'
        name='category'
        placeholder='Filter by category'
        onChange={handleFilterChange}
        className='border rounded-md px-2 py-1 '
      />
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
