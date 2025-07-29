import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../Hooks/useCart";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const [cart] = useCart();
  console.log(cart);
  const handleLogout = () => {
    logOut();
  };
  const navList = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Our Shop</Link>
      </li>
      <Link to="/dashboard/cart" className="btn">
        <FaShoppingCart></FaShoppingCart>{" "}
        <div className="badge badge-sm badge-secondary">{cart.length}</div>
      </Link>
    </>
  );
  return (
    <div className=" ">
      <div className="navbar  fixed max-w-screen-xl top-0 z-10 text-black md:text-white bg-opacity-30 bg-black shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navList}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-2xl">
            Food Hub
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navList}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button className="btn" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <>
              {" "}
              <button className="btn mr-3">
                <Link to="/login">Login</Link>
              </button>
              <button className="btn mr-2">
                <Link to="/signup">Sign Up</Link>
              </button>{" "}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
