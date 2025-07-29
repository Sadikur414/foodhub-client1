import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const axiosPublic = useAxiosPublic();
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      console.log(result.user);
      const loggedUser = result.user;
      const user = {
        name: loggedUser.displayName,
        email: loggedUser.email,
      };

      // Save user in database
      axiosPublic.post("/users", user).then((res) => {
        Swal.fire({
          icon: "success",
          title: "Signed in with Google!",
          showConfirmButton: false,
          timer: 1500,
        });
      });

      navigate("/");
    });
  };
  return (
    <div>
      <div className="divider">OR</div>
      <button onClick={handleGoogleSignIn} className="btn btn-active ">
        {" "}
        <FaGoogle></FaGoogle> Google
      </button>
    </div>
  );
};

export default SocialLogin;
