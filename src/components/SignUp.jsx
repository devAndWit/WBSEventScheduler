import { useRef } from "react";
import { Validation } from "../functions/validation.js";
import { userSignUp } from "../api/authAPI.js";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      passwordRef.current.value === confirmPasswordRef.current.value &&
      Validation.validateEmail(emailRef.current.value) &&
      Validation.validatePassword(passwordRef.current.value)
    ) {
      try {
        const response = await userSignUp(
          emailRef.current.value,
          passwordRef.current.value
        );

        if (response.statusText === "OK") {
          navigate("/signin");
          alert("Registration successful!");
        }
      } catch (error) {
        console.error("Registration failed:", error);
        alert(
          "Registration failed. Please check your credentials and try again."
        );
      }
    } else {
      alert("Registration failed, please double check the entered data.");
    }
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="max-w-[500px] bg-[#EE8F00] m-auto px-10 py-10 rounded-lg shadow-2xl">
          <h2 className="text-3xl text-center text-white font-thin">
            Register
          </h2>
          <div className="flex mt-6">
            <label
              htmlFor="idEmail"
              className="w-full p-2 text-right pr-4 text-white"
            >
              Email:
            </label>
            <input
              id="email"
              name="email"
              placeholder="EMail"
              type="text"
              ref={emailRef}
              className="w-full rounded-lg p-2 focus:outline-none active:outline-none border-none antialiased"
              required
            />
          </div>
          <div className="flex mt-4">
            <label
              htmlFor="idPassword"
              className="w-full p-2 text-right pr-4 text-white"
            >
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
          <div className="flex mt-4">
            <label
              htmlFor="idPasswordConfirm"
              className="w-full p-2 text-right pr-4 text-white"
            >
              Password Confirm:
            </label>
            <input
              id="passwordConfirm"
              name="passwordConfirm"
              placeholder="Password Confirm"
              type="password"
              ref={confirmPasswordRef}
              className="w-full rounded-lg p-2 focus:outline-none active:outline-none border-none antialiased"
              required
            />
          </div>
          <div className="flex mt-10 justify-center">
            <button
              type="submit"
              className="px-4 py-2 rounded-lg  w-1/3 m-auto text-gray-50 focus:outline-none active:outline-none border-none antialiased  hover:bg-[#0082dd] bg-[#0594F9] bg-opacity-90 hover:bg-opacity-100"
            >
              Register
            </button>
          </div>
        </div>
      </form>
      )
    </>
  );
};

export default SignUp;
