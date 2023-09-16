// src/components/UserRegistrationForm.tsx
import React, { useState } from "react";
import PageContainer from "../../components/PageContainer";
import PageTitle from "../../components/PageTitle";

interface FormData {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const CreateUserPage = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server
    console.log(formData);
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
          <label htmlFor='passwordConfirmation' className='block mb-1'>
            Confirm your Password:
          </label>
          <input
            type='password'
            id='passwordConfirmation'
            name='passwordConfirmation'
            value={formData.passwordConfirmation}
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
