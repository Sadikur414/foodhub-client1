import { FaUtensilSpoon } from "react-icons/fa";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_image_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  // ***********************submit button***********************************
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const menuItem = {
        name: data.name,
        recipe: data.recipe,
        price: parseFloat(data.price),
        category: data.category,
        image: res.data.data.display_url,
      };
      console.log(menuItem);
      //  *************************Post menuItem in database**********************************
      const result = await axiosSecure.post("/menu", menuItem);

      if (result.data.insertedId) {
        // *****************reset****************
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} has been added`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };
  return (
    <div>
      <SectionTitle
        subHeading="Whats new ? "
        heading="Add an item"
      ></SectionTitle>
      <div className="md:mx-8 md:px-7 bg-[#d8d6d6] ">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Reciepe name */}
          <div className=" w-full my-5">
            <legend className="fieldset-legend">Recipe name</legend>
            <input
              {...register("name", { required: true })}
              type="text"
              className="input w-full"
              placeholder="Type recipe name"
            />
          </div>

          <div className="flex gap-6">
            {/* Category */}
            <div className="flex-1">
              <legend className="fieldset-legend">Category</legend>
              <select
                {...register("category", { required: true })}
                className="select w-full"
              >
                <option disabled={true}>Select Category</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            {/* Price */}
            <div className="flex-1">
              {" "}
              <legend className="fieldset-legend">Price</legend>
              <input
                {...register("price", { required: true })}
                type="text"
                className="input w-full"
                placeholder=" Price"
              />
            </div>
          </div>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Recipe</legend>
              <textarea
                {...register("recipe", { required: true })}
                className="textarea h-24 w-full"
                placeholder="Recipe Details"
              ></textarea>
            </fieldset>
          </div>
          <div className="my-4">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input "
            />
          </div>
          <button className="btn mb-11">
            Add Item <FaUtensilSpoon></FaUtensilSpoon>{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
