import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const [showPassword, setShowPassword] = useState();
  const { login, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleEmailLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    login(email, password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Good Job...",
          text: "Login Successfully",
        });
        form.reset();
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Good Job...",
          text: "Login Successfully",
        });
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };
  return (
    <div className="flex justify-center items-center py-20  gap-20 ">
      <div className="lg:flex hidden">
        <img
          src="https://i.ibb.co/XkzCqr8/Free-Vector-Login-concept-illustration-removebg-preview.png"
          alt=""
        />
      </div>

      <div className="flex items-center justify-center h-screen ">
        <div className="bg-white p-8  shadow-md w-96 rounded-md">
          <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
          <form className="" onSubmit={handleEmailLogin}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="username"
                name="email"
                className="w-full border p-2 rounded"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4 relative flex">
              <div className="flex-1">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="w-full border p-2 rounded"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <span
                className="absolute top-1/2 right-0 px-4 pt-1"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#F2101E] text-white p-2 rounded w-full hover:bg-[#f56b74]  focus:outline-none focus:ring focus:border-blue-300"
              >
                Log In
              </button>
            </div>
            <div className="divider">OR</div>
            <div className="mb-4">
              <button
                onClick={handleGoogleLogin}
                type="button"
                className="  p-2 rounded w-full focus:outline-none focus:border-black border-2 text-black font-medium hover:bg-black hover:text-white"
              >
                <div className="flex items-center gap-6 justify-center">
                  <FcGoogle className="text-xl"></FcGoogle>
                  continue with google
                </div>
              </button>
            </div>
          </form>
          <div>
            <p>
              New Here ?{" "}
              <Link to={"/register"}>
                {" "}
                <span className="text-red-500 font-medium">REGISTER</span>{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
