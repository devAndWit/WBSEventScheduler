import {useRef} from "react";
import {Validation} from "../functions/validation.js";
import {userSignUp} from "../api/authAPI.js";
import {useNavigate} from "react-router-dom";


const SignUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (passwordRef.current.value === confirmPasswordRef.current.value &&
            Validation.validateEmail(emailRef.current.value) &&
            Validation.validatePassword(passwordRef.current.value)) {
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
                alert("Registration failed. Please check your credentials and try again.");
            }
        } else {
            alert("Registration failed, please double check the entered data.")
        }
    };

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <div className="max-w-[500px] bg-slate-400 m-auto p-4 rounded-lg">
                    <h2 className="text-2xl text-center">Registration</h2>
                    <div className="flex mt-4">
                        <label htmlFor="idEmail" className="w-full  rounded-lg p-2">
                            Email
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
                        <label htmlFor="idPassword" className="w-full  rounded-lg p-2">
                            Password
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
                            className="w-full  rounded-lg p-2"
                        >
                            Password Confirm
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
                    <div className="flex mt-4 justify-center">
                        <button
                            type="submit"
                            className="p-4 rounded-lg bg-slate-600 w-1/3 m-auto text-gray-50 focus:outline-none active:outline-none border-none antialiased"
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
