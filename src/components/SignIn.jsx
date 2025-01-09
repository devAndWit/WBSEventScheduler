import {useRef} from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider.jsx";
import { Validation } from "../functions/validation.js";
import { userLogIn } from "../api/authAPI.js"; // Import the userLogIn function

const SignIn = () => {
  const { login } = useAuth(); // Assuming login updates auth context
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (Validation.validateEmail(emailRef.current.value) && Validation.validatePassword(passwordRef.current.value)) {
      try {
        const response = await userLogIn(
          emailRef.current.value,
          passwordRef.current.value
        );

        if (response.statusText === "OK") {
          login(); // Assuming `login` updates auth context
        }
      } catch (error) {
        console.error("Login failed:", error);
        alert("Login failed. Please check your credentials and try again.");
      }
    }
  };


  return (
    <>
          <form onSubmit={handleSubmit} className="">
            <div className="max-w-[500px] bg-slate-400 m-auto p-4 rounded-lg shadow-2xl">
              <h2 className="text-2xl text-center">Login</h2>
              <div className="flex mt-4">
                <label htmlFor="idEmail" className="w-full  rounded-lg p-2">
                  Email:
                </label>
                <input
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  ref={emailRef}
                  className="w-full rounded-lg p-2 focus:outline-none active:outline-none border-none antialiased"
                  required
                />
              </div>
              <div className="flex mt-4">
                <label htmlFor="idPassword" className="w-full  rounded-lg p-2">
                  Password:
                </label>
                <input
                  id="password"
                  name="password"
                  placeholder="Password"
                  type="password"
                  ref={passwordRef}
                  className="w-full rounded-lg p-2 focus:outline-none active:outline-none border-none antialiased"
                  required
                />
              </div>
              <div className="flex mt-4 justify-center">
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-slate-600 w-1/3 m-auto text-gray-50 focus:outline-none active:outline-none border-none antialiased"
                >
                  Login
                </button>
                <Link
                  to="/signup"
                  className="px-4 py-2 rounded-lg bg-slate-600 w-1/3 m-auto text-gray-50 focus:outline-none active:outline-none border-none antialiased text-center"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </form>
    </>
  );
};

export default SignIn;
