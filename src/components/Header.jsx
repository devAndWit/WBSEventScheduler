import { useAuth } from "../context/AuthProvider";
import logo from "../assets/logo_event_scheduler.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="flex bg-[#0594F9] p-4">
      <div className="flex w-full items-center">
        <img
          src={logo}
          alt="website logo"
          className="block w-12 h-12 shadow-white shadow-lg"
        />
        <h1 className="text-2xl px-4 align-middle text-white">
          Event Scheduler
        </h1>
      </div>
      <div className="flex w-full items-center justify-end">
        <nav className="">
          <ul className="flex w-full items-center">
            <li className="mx-4">
              <button className="block rounded-md text-white text-center border hover:bg-[#0082dd] bg-[#0594F9] bg-opacity-90 hover:bg-opacity-100">
                <NavLink to="/" className="block px-4 py-2">
                  Home
                </NavLink>
              </button>
            </li>
            {isAuthenticated ? (
              <>
                <li className="mx-4">
                  <button className="block rounded-md text-white text-center border hover:bg-[#0082dd] bg-[#0594F9] bg-opacity-90 hover:bg-opacity-100">
                    <NavLink to="eventcreate" className="block px-4 py-2">
                      Create Event
                    </NavLink>
                  </button>
                </li>
                <li className="">
                  <button
                    onClick={logout}
                    className="block rounded-md text-white text-center border  hover:bg-[#0082dd] bg-[#0594F9] bg-opacity-90 hover:bg-opacity-100"
                  >
                    <NavLink to="/" className="block px-4 py-2">
                      Logout
                    </NavLink>
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="mx-4">
                  <button className="block rounded-md text-white text-center border  hover:bg-[#0082dd] bg-[#0594F9] bg-opacity-90 hover:bg-opacity-100">
                    <NavLink to="signin" className="block px-4 py-2">
                      SignIn
                    </NavLink>
                  </button>
                </li>
                <li className="">
                  <button className="block rounded-md text-white text-center border  hover:bg-[#0082dd] bg-[#0594F9] bg-opacity-90 hover:bg-opacity-100">
                    <NavLink to="signup" className="block px-4 py-2">
                      SignUp
                    </NavLink>
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
