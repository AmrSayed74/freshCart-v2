import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul>
      <nav class="  dark:bg-gray-900 font-normal ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="hover:text-stone-500">
                <NavLink
                  to="home"
                  class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li className="hover:text-stone-500">
                <NavLink
                  to="wishlist"
                  class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Wishlist
                </NavLink>
              </li>

              <li className="hover:text-stone-500">
                <NavLink
                  to="products"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Products
                </NavLink>
              </li>
              <li className="hover:text-stone-500">
                <NavLink
                  to="categories"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Categories
                </NavLink>
              </li>
              <li className="hover:text-stone-500">
                <NavLink
                  to="brands"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Brands
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </ul>
  );
};

export default Navbar;
