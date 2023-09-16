import React from "react";
function NavBar() {
  return (
    <nav className='fixed bg-orange-500 w-screen '>
      <ul className=''>
        <li className='text-white'>Users</li>
        <li className='text-white'>Products</li>
      </ul>
    </nav>
  );
}

export default NavBar;
