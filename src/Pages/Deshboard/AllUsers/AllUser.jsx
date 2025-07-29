import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUser = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: () => axiosSecure.get("/users").then((res) => res.data),
  });

  //   ****************make admin button*********************
  const makeAdmin = (user) => {
    const id = user._id;
    const name = user.name;
    console.log(id);
    axiosSecure.patch(`/users/${id}`).then((res) => {
      refetch();
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} successfully add as admin`,
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "info",
          title: `${name} is already an admin`,
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  //   **************************handle delete*******************
  const handleDelete = (user) => {
    const id = user._id;
    const name = user.name;
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure to delete ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} has been deleted`,
              showConfirmButton: false,
              timer: 1500,
            });

            refetch();
          }
        });
      }
    });
  };

  return (
    <div>
      <h1 className="text-3xl">Total users : {users.length}</h1>

      <div>
        {/************************ Table section *************************/}
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Si No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {users.map((user, index) => {
                  return (
                    <tr key={user._id}>
                      <th>{index + 1}</th>

                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        {user.role == "admin" ? (
                          <h1>Admin</h1>
                        ) : (
                          <button onClick={() => makeAdmin(user)}>
                            <FaUser></FaUser>
                          </button>
                        )}
                      </td>
                      <th>
                        <button
                          onClick={() => handleDelete(user)}
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
    </div>
  );
};

export default AllUser;
