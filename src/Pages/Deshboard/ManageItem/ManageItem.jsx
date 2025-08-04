import { FaRegEdit } from "react-icons/fa";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import { FaDeleteLeft } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageItem = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  //   *****************delete item******************
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${id}`);

        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "successfully deleted.",
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <div>
      <SectionTitle
        heading="Manage All Items"
        subHeading="Hurry Up!"
      ></SectionTitle>

      <div>
        <h1 className="text-2xl ml-8 mb-6">Total Items : {menu.length}</h1>
        <div className="overflow-x-auto">
          <table className="table md:mx-7">
            {/* head */}
            <thead className=" w-full">
              <tr>
                <th>Si No</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th></th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className=" w-full">
              {/* row  */}
              {menu.map((item, index) => {
                return (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>
                      <Link
                        to={`/dashboard/updateItem/${item._id}`}
                        className="btn btn-ghost py-4 text-white text-xl btn-xs bg-[#B91C1C]"
                      >
                        <FaRegEdit></FaRegEdit>
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-ghost py-4 text-white text-xl btn-xs bg-[#B91C1C]"
                      >
                        <RiDeleteBin6Line />
                      </button>
                    </td>
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

export default ManageItem;
