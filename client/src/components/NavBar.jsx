import { useState, useContext, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthStore } from "../Store/AuthStore";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const { user, setUser } = useContext(AuthStore);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const links = [
    { name: "Home", path: "/" },
    { name: "Entries", path: "/entries" },
    { name: "Categories", path: "/categories" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setUserDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="bg-black shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600 cursor-pointer">LifeDots</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-900 text-white px-3 py-2 rounded-md"
                  : "px-3 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700"
              }
            >
              {link.name}
            </NavLink>
          ))}

          {user && (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setUserDropdown(!userDropdown)}
                className="px-3 py-2 rounded-md bg-green-600 text-white"
              >
                {user.username || user.email} ▼
              </button>

              <AnimatePresence>
                {userDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-32 bg-gray-800 rounded shadow-lg z-10 flex flex-col"
                  >
                    <button
                      onClick={handleLogout}
                      className="px-4 py-2 text-white hover:bg-red-600 rounded-t"
                    >
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {!user && (
            <NavLink
              to="/login"
              className="px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white"
            >
              Login
            </NavLink>
          )}
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-2 text-center">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="px-3 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}

          {user && (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setUserDropdown(!userDropdown)}
                className="px-3 py-2 rounded-md bg-green-600 text-white w-full"
              >
                {user.username || user.email} ▼
              </button>

              <AnimatePresence>
                {userDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-32 bg-gray-800 rounded shadow-lg flex flex-col"
                  >
                    <button
                      onClick={handleLogout}
                      className="px-4 py-2 text-white hover:bg-red-600 rounded-t"
                    >
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {!user && (
            <NavLink
              to="/login"
              className="px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-500"
              onClick={() => setIsOpen(false)}
            >
              Login
            </NavLink>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
