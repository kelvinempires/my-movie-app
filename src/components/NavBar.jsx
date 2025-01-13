import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 w-full sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
          <div className="text-white text-xl font-bold">My Movie App</div>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button className="text-gray-300 hover:text-white focus:outline-none">
            Menu
          </button>
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
            <Link
              to="/"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
