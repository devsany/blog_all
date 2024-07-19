import { useState } from "react";
import { NavLink } from "react-router-dom";

const MainLink = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <header className="bg-gray-800 text-white">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="text-xl font-bold">
            <a href="#" className="hover:text-gray-300">
              Logo
            </a>
          </div>
          <nav>
            <ul
              className={`md:flex space-x-8 ${
                isMenuOpen ? "block" : "hidden"
              } md:block`}
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
            </ul>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="focus:outline-none">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </nav>
          <div>
            <a
              href="#"
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            >
              <NavLink to="/login">Login for adimn</NavLink>
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <ul className="bg-gray-800">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </ul>
        </div>
      </header>
      {/* <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
      </ul> */}
    </div>
  );
};

export default MainLink;
