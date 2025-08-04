import {
  FaHome,
  FaCartArrowDown,
  FaCalendarAlt,
  FaStar,
  FaBook,
  FaUtensils,
  FaShoppingBag,
  FaPhone,
  FaList,
  FaUsers,
} from "react-icons/fa";

import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();

  return (
    <div className="flex  ">
      <div className="bg-[#D1A054] w-72 min-h-screen text-center p-4  z-10">
        {/************************** Dashboard Navigation Bar ******************************/}
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Foodhub</h1>
          <h2 className="text-lg">Restaurant</h2>
        </div>

        {/* Dashboard Main Options */}
        <div className="flex flex-col gap-2 text-left px-2 ">
          {isAdmin ? (
            // *******************************************admin part*************************
            <>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex gap-2 items-center px-3 py-2 rounded-md transition-all duration-300 ${
                    isActive
                      ? "bg-[#b9843c] text-white font-bold"
                      : "hover:bg-[#c79a4b]"
                  }`
                }
              >
                <FaHome />
                ADMIN HOME
              </NavLink>

              <NavLink
                to="/dashboard/additem"
                className={({ isActive }) =>
                  `flex gap-2 items-center px-3 py-2 rounded-md transition-all duration-300 ${
                    isActive
                      ? "bg-[#b9843c] text-white font-bold"
                      : "hover:bg-[#c79a4b]"
                  }`
                }
              >
                <FaUtensils />
                ADD ITEMS
              </NavLink>

              <NavLink
                to="/dashboard/manageitem"
                className={({ isActive }) =>
                  `flex gap-2 items-center px-3 py-2 rounded-md transition-all duration-300 ${
                    isActive
                      ? "bg-[#b9843c] text-white font-bold"
                      : "hover:bg-[#c79a4b]"
                  }`
                }
              >
                <FaList />
                MANAGE ITEMS
              </NavLink>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex gap-2 items-center px-3 py-2 rounded-md transition-all duration-300 ${
                    isActive
                      ? "bg-[#b9843c] text-white font-bold"
                      : "hover:bg-[#c79a4b]"
                  }`
                }
              >
                <FaBook />
                MANAGE BOOKING
              </NavLink>

              <NavLink
                to="/dashboard/users"
                className={({ isActive }) =>
                  `flex gap-2 items-center px-3 py-2 rounded-md transition-all duration-300 ${
                    isActive
                      ? "bg-[#b9843c] text-white font-bold"
                      : "hover:bg-[#c79a4b]"
                  }`
                }
              >
                <FaUsers />
                ALL USERS
              </NavLink>
            </>
          ) : (
            //*******************************  users part*******************************
            <>
              {" "}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex gap-2 items-center px-3 py-2 rounded-md transition-all duration-300 ${
                    isActive
                      ? "bg-[#b9843c] text-white font-bold"
                      : "hover:bg-[#c79a4b]"
                  }`
                }
              >
                <FaHome /> HOME
              </NavLink>
              <NavLink
                to="/dashboard/cart"
                className={({ isActive }) =>
                  `flex gap-2 items-center px-3 py-2 rounded-md transition-all duration-300 ${
                    isActive
                      ? "bg-[#b9843c] text-white font-bold"
                      : "hover:bg-[#c79a4b]"
                  }`
                }
              >
                <FaCartArrowDown /> MY CART
              </NavLink>
              <NavLink
                to="/dashboard/review"
                className={({ isActive }) =>
                  `flex gap-2 items-center px-3 py-2 rounded-md transition-all duration-300 ${
                    isActive
                      ? "bg-[#b9843c] text-white font-bold"
                      : "hover:bg-[#c79a4b]"
                  }`
                }
              >
                <FaStar /> ADD REVIEW
              </NavLink>
              <NavLink
                to="/dashboard/booking"
                className={({ isActive }) =>
                  `flex gap-2 items-center px-3 py-2 rounded-md transition-all duration-300 ${
                    isActive
                      ? "bg-[#b9843c] text-white font-bold"
                      : "hover:bg-[#c79a4b]"
                  }`
                }
              >
                <FaBook /> BOOKING
              </NavLink>
              <NavLink
                to="/dashboard/reservation"
                className={({ isActive }) =>
                  `flex gap-2 items-center px-3 py-2 rounded-md transition-all duration-300 ${
                    isActive
                      ? "bg-[#b9843c] text-white font-bold"
                      : "hover:bg-[#c79a4b]"
                  }`
                }
              >
                <FaCalendarAlt /> RESERVATION
              </NavLink>
            </>
          )}
        </div>

        {/* Divider */}
        <div className="my-6">
          <hr className="border-gray-300" />
        </div>

        {/* Public Site Navigation */}
        <div className="flex flex-col gap-2 text-left  px-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex gap-2 items-center px-3 py-2 rounded-md transition-all duration-300 ${
                isActive
                  ? "bg-[#b9843c] text-white font-bold"
                  : "hover:bg-[#c79a4b]"
              }`
            }
          >
            <FaHome /> HOME
          </NavLink>

          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `flex gap-2 items-center px-3 py-2 rounded-md transition-all duration-300 ${
                isActive
                  ? "bg-[#b9843c] text-white font-bold"
                  : "hover:bg-[#c79a4b]"
              }`
            }
          >
            <FaUtensils /> MENU
          </NavLink>

          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `flex gap-2 items-center px-3 py-2 rounded-md transition-all duration-300 ${
                isActive
                  ? "bg-[#b9843c] text-white font-bold"
                  : "hover:bg-[#c79a4b]"
              }`
            }
          >
            <FaShoppingBag /> SHOP
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex gap-2 items-center px-3 py-2 rounded-md transition-all duration-300 md:mb-8 ${
                isActive
                  ? "bg-[#b9843c] text-white font-bold"
                  : "hover:bg-[#c79a4b] "
              }`
            }
          >
            <FaPhone /> CONTACT
          </NavLink>
        </div>
      </div>

      {/***************************************  Outlet section(right) ******************************/}
      <div className="flex-1 ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
