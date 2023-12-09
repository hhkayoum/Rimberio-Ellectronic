import { Link } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const Register = () => {
  const [showPassword, setShowPassword] = useState();
  const { createUser } = useContext(AuthContext);
  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    console.log(email, password, name);

    if (password.length < 6) {
      toast("Password must be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast("Use at least one capital letter");
      return;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      toast("Use at least one special character");
      return;
    }
    if (password) {
      createUser(email, password, name)
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Good Job...",
            text: "User create success",
          });
          form.reset();
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
          });
        });
    }
  };
  return (
    <div className="mt-30">
      <div className="flex justify-center items-center my-10 py-20 lg:gap-20">
        <div className="lg:flex hidden">
          <img
            src="https://i.ibb.co/6t9pGMp/register-e58071de.png"
            alt="Registration"
          />
        </div>

        <div className="flex items-center justify-center h-screen">
          <div className="bg-white p-8 shadow-md w-96 rounded-md">
            <h2 className="text-xl font-bold mb-4 text-center">Register</h2>
            <form onSubmit={handleCreateUser}>
              <div className="mb-4">
                <label
                  htmlFor="email"
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
              <div className="mb-4 flex relative">
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
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-0 px-3 pt-1  "
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="imgUrl"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Image URL
                </label>
                <input
                  type="text"
                  id="imgUrl"
                  name="imgUrl"
                  className="w-full border p-2 rounded"
                  placeholder="Enter your image URL"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border p-2 rounded"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-[#F2101E] text-white p-2 rounded w-full hover:bg-[#f06770]  focus:outline-none focus:ring focus:border-blue-300"
                >
                  Register
                </button>
              </div>
            </form>
            <div className="divider">OR</div>
            <div>
              <p>
                Already Have an Account?{" "}
                <Link to={"/login"}>
                  <span className="text-red-500 font-medium">Login</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Register;
