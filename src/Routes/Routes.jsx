import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivetRoute from "./PrivetRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Deshboard/MyCart/Cart";
import Review from "../Pages/Deshboard/Review/Review";
import AllUser from "../Pages/Deshboard/AllUsers/AllUser";
import AddItems from "../Pages/Deshboard/AddItems/AddItems";
import ManageItem from "../Pages/Deshboard/ManageItem/ManageItem";
import UpdateItem from "../Pages/Deshboard/UpdatteItem/UpdateItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivetRoute>
        {" "}
        <Dashboard></Dashboard>
      </PrivetRoute>
    ),
    children: [
      // **********users related routes*******
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "review",
        element: <Review></Review>,
      },
      //**********admin related routes**************/
      {
        path: "users",
        element: <AllUser></AllUser>,
      },
      {
        path: "additem",
        element: <AddItems></AddItems>,
      },
      {
        path: "manageitem",
        element: <ManageItem></ManageItem>,
      },
      {
        path: "updateItem/:id",
        element: <UpdateItem></UpdateItem>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
    ],
  },
]);
export default router;
