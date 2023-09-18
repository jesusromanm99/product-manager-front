import React from "react";
import { Link, useNavigate } from "react-router-dom";
function NavBar({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const hanldeLogOut = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };
  return (
    <div className='h-screen '>
      <nav className='fixed z-10 top-0 left-0 bg-orange-500 w-screen  '>
        <ul className=' flex justify-end gap-3 max-w-5xl py-5  mx-auto'>
          <li className='text-white font-semibold hover:underline hover:cursor-pointer'>
            <Link to={"/users"}>Users</Link>
          </li>
          <li className='text-white font-semibold hover:underline hover:cursor-pointer'>
            <Link to={"/products"}>Products</Link>
          </li>
          <li
            onClick={hanldeLogOut}
            className='text-white font-semibold hover:underline hover:cursor-pointer'
          >
            Log out
          </li>
        </ul>
      </nav>
      <div className='relative top-10 pb-7'>{children}</div>
    </div>
  );
}

export default NavBar;
