import { Link } from "react-router";

const Footer = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Entries", path: "/entries" },
    { name: "Categories", path: "/categories" },
  ];

  return (
    <footer className="bg-black text-gray-400 py-8 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        
        <div className="text-2xl font-bold text-blue-600 mb-4 md:mb-0">
          LifeDots
        </div>

        
        <div className="flex gap-6 flex-wrap justify-center mb-4 md:mb-0">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-500 text-center md:text-right">
          &copy; {new Date().getFullYear()} LifeDots. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
