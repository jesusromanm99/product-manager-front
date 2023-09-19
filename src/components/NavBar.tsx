import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
const LINKS = [
  {
    label: "Users",
    href: "/users",
    icon: faUser,
  },
  { label: "Products", href: "/products", icon: faBox },
];
function NavBar({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  console.log({ pathname });

  const navigate = useNavigate();
  const hanldeLogOut = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };
  return (
    <div className='h-screen '>
      <nav className='fixed z-10 top-0 left-0 bg-orange-500 w-screen  '>
        <ul className=' flex justify-end gap-3 max-w-5xl py-5  mx-auto'>
          {LINKS.map((link, index) => (
            <li
              key={index}
              className='px-2 py-2 text-white font-semibold hover:bg-white hover:rounded-md hover:text-orange-500 hover:cursor-pointer '
            >
              <Link
                to={link.href}
                className={`px-2 py-2  font-semibold ${
                  pathname == link.href ? "bg-white text-orange-500 rounded-md" : "text-white"
                } hover:bg-white hover:rounded-md hover:text-orange-500 hover:cursor-pointer `}
              >
                <FontAwesomeIcon icon={link.icon} className='mr-1' /> {link.label}
              </Link>
            </li>
          ))}
          <li
            onClick={hanldeLogOut}
            className='px-2 py-2 text-white font-semibold hover:bg-white hover:rounded-md hover:text-orange-500 hover:cursor-pointer '
          >
            <FontAwesomeIcon icon={faRightFromBracket} className='mr-1' />
            Log out
          </li>
        </ul>
      </nav>
      <div className='relative top-10 pb-7'>{children}</div>
    </div>
  );
}

export default NavBar;
