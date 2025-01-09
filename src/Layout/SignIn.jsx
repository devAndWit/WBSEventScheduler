import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { Validation } from "../functions/validation";
import { userLogIn } from "../api/authAPI"; // Import the userLogIn function

const SignIn = () => {
  const { isAuthenticated, login } = useAuth(); // Assuming login updates auth context

  const [formData, setFormData] = useState({
    email: {
      text: "",
      isError: true,
      type: "email",
    },
    password: {
      text: "",
      isError: true,
      type: "password",
    },
  });

  useEffect(() => {
    console.log("isError in Emaildata: ", formData.email.isError);
    console.log("isError in Passworddata: ", formData.password.isError);
    if (
      formData.email.isError === false &&
      formData.password.isError === false
    ) {
      console.log("Ready to send request to API");
    }
  }, [formData.email.isError, formData.password.isError]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: {
        ...prevData[name],
        text: value,
      },
    }));
  };

  const setError = (fieldname, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldname]: {
        ...prevData[fieldname],
        isError: value,
      },
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateData()) {
      try {
        const response = await userLogIn(
          formData.email.text,
          formData.password.text
        );
        if (response) {
          login(response.token); // Assuming `login` updates auth context
          alert("Login successful!");
        }
      } catch (error) {
        console.error("Login failed:", error);
        alert("Login failed. Please check your credentials and try again.");
      }
    }
  };

  const validateData = () => {
    const emailValid =
      Validation.validateRequired(formData.email.text) &&
      Validation.validateEmail(formData.email.text);

    const passwordValid =
      Validation.validateRequired(formData.password.text) &&
      Validation.validatePassword(formData.password.text);

    setError("email", !emailValid);
    setError("password", !passwordValid);

    return emailValid && passwordValid;
  };

  return (
    <>
      <main className="mb-10 relative py-5 ">
        {!isAuthenticated ? (
          <form onSubmit={handleSubmit} className="">
            <div className="max-w-[500px] bg-slate-400 m-auto p-4 rounded-lg shadow-2xl">
              <h2 className="text-2xl text-center">Login</h2>
              <div className="flex mt-4">
                <label htmlFor="idEmail" className="w-full  rounded-lg p-2">
                  Email:
                </label>
                <input
                  id="idEmail"
                  name="email"
                  placeholder="Email"
                  value={formData.email.text || "user@example.com"}
                  onChange={handleChange}
                  type="text"
                  className="w-full rounded-lg p-2 focus:outline-none active:outline-none border-none antialiased"
                  required
                />
              </div>
              <div className="flex mt-4">
                <label htmlFor="idPassword" className="w-full  rounded-lg p-2">
                  Password:
                </label>
                <input
                  id="idPassword"
                  name="password"
                  value={formData.password.text || "password123"}
                  onChange={handleChange}
                  placeholder="Password"
                  type="password"
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
        ) : (
          ""
        )}
      </main>
    </>
  );
};

export default SignIn;
