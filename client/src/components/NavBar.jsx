import { useState,useContext } from "react";
import { Navigate, NavLink } from "react-router";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "Home", path: "/" },
    { name: "Entries", path: "/entries" },
    { name: "Categories", path: "/categories" },
    // {name: "Login",path:"/login"}
  ];

  
  const activeClass = "bg-blue-900 text-white px-2 py-2 rounded";
  const normalClass =
    "px-3 py-2 rounded-md bg-gray-800 hover:bg-gray-700 shadow-md cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 text-white";

  return (
    <nav className="bg-black shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

       
        <div className="relative text-2xl font-bold cursor-pointer text-blue-600 px-2 py-1 rounded-md group transition-transform duration-300 hover:scale-105">
          LifeDots
          <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full"></span>
        </div>

        <div className="hidden md:flex items-center gap-4">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive ? activeClass : normalClass
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            key="Login"
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "px-3 py-2 rounded-md bg-blue-700 text-white shadow-md cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                : "px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-500 shadow-md cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 text-white"
            }
          >
            Login
          </NavLink>
        </div>

       
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-2 text-center">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-2 rounded-md bg-blue-600 text-white shadow-md cursor-pointer transition-all duration-300"
                  : "px-3 py-2 rounded-md bg-gray-800 hover:bg-gray-700 shadow-md cursor-pointer transition-all duration-300 text-white"
              }
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            key="Login"
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "px-3 py-2 rounded-md bg-blue-700 text-white shadow-md cursor-pointer transition-all duration-300"
                : "px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-500 shadow-md cursor-pointer transition-all duration-300 text-white"
            }
            onClick={() => setIsOpen(false)}
          >
            Login
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
