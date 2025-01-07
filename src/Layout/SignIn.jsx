import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const SignIn = () => {
  const { isAuthenticated, login, logout } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("FormData: ", formData);
  };

  return (
    <>
      {!isAuthenticated ? (
        <form action="" onSubmit={handleSubmit}>
          <div className="max-w-[500px] bg-slate-400 m-auto p-4 rounded-lg">
            <h2 className="text-2xl text-center">Login</h2>
            <div className="flex mt-4">
              <label htmlFor="idEmail" className="w-full  rounded-lg p-2">
                Email
              </label>
              <input
                id="idEmail"
                name="email"
                placeholder="EMail"
                value={formData.email}
                onChange={handleChange}
                type="text"
                className="w-full rounded-lg p-2 focus:outline-none active:outline-none border-none antialiased"
                required
              />
            </div>
            <div className="flex mt-4">
              <label htmlFor="idPassword" className="w-full  rounded-lg p-2">
                Password
              </label>
              <input
                id="idPassword"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                type="password"
                className="w-full rounded-lg p-2 focus:outline-none active:outline-none border-none antialiased"
                required
              />
            </div>
            <div className="flex mt-4 justify-center">
              <button
                type="button"
                className="p-4 rounded-lg bg-slate-600 w-1/3 m-auto text-gray-50 focus:outline-none active:outline-none border-none antialiased"
              >
                Login
              </button>
              <Link
                to="/signup"
                className="p-4 rounded-lg bg-slate-600 w-1/3 m-auto text-gray-50 focus:outline-none active:outline-none border-none antialiased text-center"
              >
                Sign up
              </Link>
            </div>
          </div>
        </form>
      ) : (
        ""
      )}
    </>
  );
};

export default SignIn;
