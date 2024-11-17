import { Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import CartIcon from "../features/Cart/CartIcon";
import Logout from "../features/authentication/Logout";

const Nav = () => {
  const userToken = localStorage.getItem("userToken");
  return (
    <>
      <Navbar className="relative text-xl font-medium bg-transparent max-w-screen-xl flex flex-wrap items-center justify-between  ml-auto md:mx-auto ">
        <Navbar.Toggle />

        <Navbar.Collapse className="text-xl bg-stone-200 absolute top-[4rem] left-[-136PX] min-w-[165px] md:relative md:inset-0 md:bg-transparent">
          <ul className="gap-10 pb-4 pl-6 md:p-0 mt-4 flex flex-col md:mt-0 md:flex-row  md:text-sm md:font-medium">
            <NavLink to="home" className="text-3xl" aria-current="page">
              Home
            </NavLink>
            <NavLink to="wishlist" className="text-3xl" aria-current="page">
              Wishlist
            </NavLink>
            <NavLink className="text-3xl" to="products">
              Products
            </NavLink>
            <NavLink className="text-3xl" to="categories">
              Categories
            </NavLink>
            <NavLink className="text-3xl" to="brands">
              Brands
            </NavLink>
          </ul>
        </Navbar.Collapse>
      </Navbar>
      {userToken ? (
        <div className="flex items-center gap-8">
          <CartIcon />
          <Logout />
        </div>
      ) : (
        <div className=" flex gap-4">
          <Link className="hover:text-[--color-green-800]" to="/login">
            Login
          </Link>
          <Link className="hover:text-[--color-green-800]" to="/signup">
            Register
          </Link>
        </div>
      )}
    </>
  );
};

export default Nav;
/*

    position: absolute;
    top: 34px;
    left: -136px;
    min-width: 165px;
    background: red;
    
    */
