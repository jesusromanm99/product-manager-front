// src/components/UserRegistrationForm.tsx
import React, { useState } from "react";
import PageContainer from "../../components/PageContainer";
import PageTitle from "../../components/PageTitle";
import { createUser } from "../../utils/service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface FormData {
  username: string;
  email: string;
  password: string;
}

const CreateUserPage = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server
    const { data, error } = await createUser(formData);
    if (data) {
      toast.success("User created successfully");
      navigate("/login", { replace: true });
    } else {
      toast.error(error);
    }
  };

  return (
    <PageContainer maxW='max-w-lg'>
      <PageTitle title='Create an account' />
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label htmlFor='username' className='block mb-1'>
            Username:
          </label>
          <input
            type='text'
            id='username'
            name='username'
            value={formData.username}
            onChange={handleChange}
            className='w-full px-3 py-2 border bg-gray-100'
            required
          />
        </div>
        <div>
          <label htmlFor='email' className='block mb-1'>
            Email:
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='w-full px-3 py-2 border bg-gray-100'
            required
          />
        </div>
        <div>
          <label htmlFor='password' className='block mb-1'>
            Password:
          </label>
          <input
            type='password'
            id='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            className='w-full px-3 py-2 border bg-gray-100'
            required
          />
        </div>

        <div>
          <button
            type='submit'
            className='w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600'
          >
            Sign up
          </button>
        </div>
      </form>
    </PageContainer>
  );
};

export default CreateUserPage;
