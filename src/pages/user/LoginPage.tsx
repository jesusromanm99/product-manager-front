import React, { useState } from "react";
import { login } from "../../utils/service";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    const { data, error } = await login({ username, password });
    if (data) {
      localStorage.setItem("session", JSON.stringify(data));
      navigate("/users", { replace: true });
    } else {
      toast.error(error.detail);
    }
  };
  return (
    <section className='flex justify-center items-center h-screen w-screen '>
      <div className='bg-white border rounded-md md:w-1/3 px-10 py-8 '>
        <h1 className='text-xl font-semibold inline-block border-b-2 border-b-orange-500 mb-5'>
          Sing in to your account
        </h1>
        <form className='space-y-4 ' onSubmit={handleLogin}>
          <div className='flex flex-col gap-3'>
            <label htmlFor='username' className='text-gray-700 font-semibold'>
              Username
            </label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder=''
              className='px-3 py-2 border bg-gray-200'
            />
          </div>
          <div className='flex flex-col gap-3'>
            <label htmlFor='password' className='text-gray-700 font-semibold'>
              Password
            </label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder=''
              className='px-3 py-2 border bg-gray-200'
            />
          </div>
          <button
            type='submit'
            className='w-full bg-orange-500 text-white font-bold px-4 py-2 rounded-sm'
          >
            Sign in
          </button>
          <p className='text-sm  text-gray-500 '>
            Don’t have an account yet?{" "}
            <Link to='/sign-up' className='font-medium text-orange-500 hover:underline '>
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default LoginPage;
