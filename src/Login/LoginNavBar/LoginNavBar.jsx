import { useState } from "react";
import { NavLink } from "react-router-dom";
const LoginNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <header className="bg-gray-400 text-blue-900  x">
        <div className="container mx-auto flex justify-between items-center p-4">
          <nav>
            <ul
              className={`md:flex space-x-8 ${
                isMenuOpen ? "hidden" : "hidden"
              } md:block`}
            >
              <li>
                <NavLink
                  className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  to="/login/general_theme"
                >
                  General Theam
                </NavLink>
                {/* <NavLink to="/login/general_theme">General Theam</NavLink> */}
              </li>
              {/* <li>
                <NavLink to="/login/tech_&_Program">Tech & Program</NavLink>
              </li> */}
              <li>
                <NavLink
                  className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  to="/login/travel"
                >
                  Travel
                </NavLink>
                {/* <NavLink to="/login/travel">Travel</NavLink> */}
              </li>
              <li>
                <NavLink
                  className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  to="/login/lifestyle"
                >
                  Lifestyle
                </NavLink>
                {/* <NavLink to="/login/lifestyle">Lifestyle</NavLink> */}
              </li>
              <li>
                <NavLink
                  className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  to="/login/personal_Development"
                >
                  Personal Development
                </NavLink>
                {/* <NavLink to="/login/personal_Development">
                  Personal Development
                </NavLink> */}
              </li>
              <li>
                <NavLink
                  className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  to="/login/creative_Writing"
                >
                  Creative Writing
                </NavLink>
                {/* <NavLink to="/login/creative_Writing">Creative Writing</NavLink> */}
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
          <nav>
            <div>
              <NavLink
                className="text-white bg-gray-600 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                to="/"
              >
                Logout
              </NavLink>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <div class="flex space-x-4 px-1 py-3">
            <table className="border border-black">
              <tr>
                <th className="border border-slate-400 p-2 text-center">
                  {" "}
                  <NavLink
                    className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    to="/login/general_theme"
                  >
                    General
                  </NavLink>
                </th>
                <th className="border border-slate-400 text-center">
                  <NavLink
                    className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    to="/login/travel"
                  >
                    Travel
                  </NavLink>
                </th>
                <th className="border border-slate-400 text-center">
                  {" "}
                  <NavLink
                    className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    to="/login/lifestyle"
                  >
                    Life style
                  </NavLink>
                </th>
                <th className="border border-slate-400 text-center">
                  <NavLink
                    className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    to="/login/personal_Development"
                  >
                    Developnemt
                  </NavLink>
                </th>
                <th className="border border-slate-400 text-center">
                  <NavLink
                    className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    to="/login/creative_Writing"
                  >
                    Creative
                  </NavLink>
                </th>
              </tr>
            </table>

            {/* <NavLink
              className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              to="/blog/general_theme"
            >
              General Theam
            </NavLink>

            <NavLink
              className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              to="/blog/travel"
            >
              Travel
            </NavLink>

            <NavLink
              className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              to="/blog/lifestyle"
            >
              Life style
            </NavLink>
            <NavLink
              className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              to="/blog/personal_Development"
            >
              Personal Developnemt
            </NavLink>
            <NavLink
              className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              to="/blog/creative_Writing"
            >
              Creative Writing
            </NavLink> */}
          </div>
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

export default LoginNavBar;
