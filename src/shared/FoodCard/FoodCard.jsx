import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const [, refetch] = useCart();
  const location = useLocation();
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const handleAddtoCart = () => {
    if (user && user?.email) {
      const cart = {
        menuId: _id,
        user_email: user.email,
        name,
        price,
        image,
      };
      console.log(cart);
      //to do data sent on database
      axiosSecure.post("/cart", cart).then((result) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "successfully add the cart ",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      });
    } else {
      Swal.fire({
        title: "you are not loged in",
        text: "please login or singnup",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go to login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      {/* Image + Price Container */}
      <div className="relative">
        <img src={image} alt={name} className="w-full h-64 object-cover" />
        <p className="absolute top-4 right-4 bg-slate-900 text-white text-sm px-3 py-1 rounded shadow">
          ${price}
        </p>
      </div>

      {/* Card Body */}
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions mt-2 justify-center">
          <button onClick={handleAddtoCart} className="btn btn-primary">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
