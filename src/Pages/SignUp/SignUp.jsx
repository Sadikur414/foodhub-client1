import { Helmet } from "react-helmet-async";
import registerImg from "../../assets/others/authentication1.png";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const SignUp = () => {
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    createUser(email, password)
      .then((result) => {
        // Signed in
        const user = {
          name: data.name,
          email: data.email,
        };
        axiosPublic.post("/users", user).then((res) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "succesfully registered",
            showConfirmButton: false,
            timer: 1500,
          });
        });

        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error creating user:", errorCode, errorMessage);
      });
  };

  return (
    <>
      <Helmet>
        <title>Foodhub || Sign-Up</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex flex-col lg:flex-row-reverse">
          {/* Left Side */}
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-5xl text-center font-bold">Register now!</h1>
            <p className="py-6">
              <img className="w-[450px]" src={registerImg} alt="" />
            </p>
          </div>

          {/* Right Side - Form */}
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl lg:w-1/2">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
                {/* Name */}
                <label className="label">Name</label>
                <input
                  {...register("name")}
                  type="text"
                  className="input input-bordered"
                  placeholder="Name"
                />

                {/* Email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className="input input-bordered"
                  placeholder="Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}

                {/* Password */}
                <label className="label">Password</label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    pattern: {
                      value: /^(?=.*[A-Z])/,
                      message: "Password must include 1 uppercase letter",
                    },
                  })}
                  className="input input-bordered"
                  placeholder="Password"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}

                {/* Submit */}
                <input
                  className="btn btn-neutral mt-4 w-full"
                  type="submit"
                  value="Register"
                />
              </form>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
