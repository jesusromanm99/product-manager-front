import React, { useState } from "react";
import { login } from "../../utils/service";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const result = await login({ username, password });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className='flex justify-center items-center h-screen w-screen '>
      <div className='bg-white border rounded-md w-1/3 px-10 py-8 '>
        <h1 className='text-xl font-semibold inline-block border-b-2 border-b-orange-500 mb-5'>
          Iniciar Sesión
        </h1>
        <form className='space-y-4 ' onSubmit={handleLogin}>
          <div className='flex flex-col gap-3'>
            <label htmlFor='username' className='text-gray-700 font-semibold'>
              Usuario
            </label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder='Ingrese su usuario'
              className='px-3 py-2 border bg-gray-200'
            />
          </div>
          <div className='flex flex-col gap-3'>
            <label htmlFor='password' className='text-gray-700 font-semibold'>
              Contraseña
            </label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder='Ingrese su contraseña'
              className='px-3 py-2 border bg-gray-200'
            />
          </div>
          <button
            type='submit'
            className='inline-block bg-orange-500 text-white font-bold px-4 py-2 rounded-sm mx-auto'
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </section>
  );
}

export default LoginPage;
