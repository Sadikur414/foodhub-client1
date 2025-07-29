import { RiDeleteBin6Line } from "react-icons/ri";
import useCart from "../../../Hooks/useCart";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

import Swal from "sweetalert2";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const totalprice = cart.reduce((total, item) => {
    return total + item.price;
  }, 0);
  console.log(cart);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/cart/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="flex justify-evenly mt-14">
        <h1 className="text-2xl ">Total Order : {cart.length}</h1>
        <h2 className="text-2xl">Total Price : ${totalprice}</h2>
        <h3 className="text-2xl text-white bg-[#D1A054] px-4 py-2 rounded-lg">
          PAY
        </h3>
      </div>
      {/************************ Table section *************************/}
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Si No</th>
                <th>Item Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((item, index) => {
                return (
                  <tr key={item._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <th>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-ghost py-4 text-white text-xl btn-xs bg-[#B91C1C]"
                      >
                        <RiDeleteBin6Line />
                      </button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
