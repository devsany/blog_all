import { useState } from "react";
import { NavLink } from "react-router-dom";

const BlogLink = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="containt">
        <nav
          class="
         bg-opacity-10
        bg-gray-500 p-4 w-[100%] md:h-[80px] backdrop-filter backdrop-blur-sm"
        >
          <div
            class={`float-right mx-auto flex justify-between items-center ${
              isMenuOpen ? "hidden" : "hidden"
            } md:block`}
          >
            {/* <div class="flex items-center">
              <a href="#" class="text-white text-xl font-bold">
                Logo
              </a> */}
            {/* </div> */}
            <div class="flex space-x-4">
              <NavLink
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
              </NavLink>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <div className="text-white hover:bg-gray-700 bg-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                {!isMenuOpen ? "Open Blog Menu" : "Close Blog Menu"}
              </div>
            </button>
          </div>

          {/* on mobile view */}
          <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
            <div class="flex space-x-4 px-1 py-3">
              <table className="border border-black">
                <tr>
                  <th className="border border-slate-400 p-2 text-center">
                    {" "}
                    <NavLink
                      className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      to="/blog/general_theme"
                    >
                      General
                    </NavLink>
                  </th>
                  <th className="border border-slate-400 text-center">
                    <NavLink
                      className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      to="/blog/travel"
                    >
                      Travel
                    </NavLink>
                  </th>
                  <th className="border border-slate-400 text-center">
                    {" "}
                    <NavLink
                      className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      to="/blog/lifestyle"
                    >
                      Life style
                    </NavLink>
                  </th>
                  <th className="border border-slate-400 text-center">
                    <NavLink
                      className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      to="/blog/personal_Development"
                    >
                      Developnemt
                    </NavLink>
                  </th>
                  <th className="border border-slate-400 text-center">
                    <NavLink
                      className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      to="/blog/creative_Writing"
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
        </nav>
      </div>
    </>
  );
};

export default BlogLink;
