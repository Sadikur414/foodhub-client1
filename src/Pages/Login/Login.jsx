import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/others/authentication1.png";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInUser(email, password).then((result) => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "succesfully login",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from);
    });
  };
  return (
    <>
      <Helmet>
        <title>Foodhub || login</title>
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200 p-4">
        <div className="hero bg-white rounded-2xl shadow-2xl max-w-4xl w-full">
          <div className="hero-content flex-col lg:flex-row p-8">
            {/* Left Side - Image & Text */}
            <div className="lg:flex-1 text-center lg:text-left px-4">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800">
                Please Login !
              </h1>

              <img
                src={loginImg}
                alt="Login"
                className="mt-6 w-2/3 lg:w-1/2 mx-auto lg:mx-0 rounded-xl shadow-md"
              />
            </div>

            {/* Right Side - Login Form */}
            <div className="card lg:flex-1 bg-base-100 w-full max-w-sm shadow-xl rounded-xl p-6">
              <div className="card-body">
                <h2 className="text-2xl font-bold text-center mb-4 text-gray-700">
                  Login to your account
                </h2>

                {/* form field start */}
                <form onSubmit={handlesubmit} className="fieldset space-y-3">
                  <label className="label text-gray-600 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="input input-bordered rounded-lg"
                    placeholder="Enter your email"
                  />
                  <label className="label text-gray-600 font-medium">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="input input-bordered rounded-lg"
                    placeholder="Enter your password"
                  />
                  <div className="flex justify-between items-center text-sm mt-1">
                    <a className="link link-hover text-blue-600">
                      Forgot password?
                    </a>
                    <Link
                      to="/signup"
                      className="link link-hover text-blue-600"
                    >
                      Create an account
                    </Link>
                  </div>

                  <input
                    className="btn btn-neutral mt-4 w-full rounded-lg"
                    type="submit"
                    value="Login"
                  />
                </form>
                <SocialLogin></SocialLogin>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
