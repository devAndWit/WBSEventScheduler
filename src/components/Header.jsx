import { useAuth } from "../context/AuthProvider";
import logo from "../assets/logo_event_scheduler.png";
import {NavLink} from "react-router-dom";

const Header = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="flex bg-slate-400 p-4">
      <div className="flex w-full items-center">
        <img src={logo} alt="website logo" className="block w-12 h-12" />
        <h1 className="text-2xl px-4 align-middle">Event Scheduler</h1>
      </div>
      <div className="flex w-full items-center justify-end">
        <nav className="">
          <ul className="flex w-full items-center">
            <li className="mx-4">
              <button
                className="block bg-cyan-700 px-4 py-2 rounded-xl text-white text-center"
              >
                  <NavLink to='/'>Home</NavLink>
              </button>
            </li>
            {isAuthenticated ? (
              <>
                <li className="mx-4">
                  <button
                    className="block bg-cyan-700 px-4 py-2 rounded-xl text-white text-center"
                  >
                      <NavLink to='eventcreate'>Create Event</NavLink>
                  </button>
                </li>
                <li className="">
                  <button
                      onClick={logout}
                    className="block bg-cyan-700 px-4 py-2 rounded-xl text-white text-center"
                  >
                      <NavLink to='/'>Logout</NavLink>
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="mx-4">
                  <button
                    className="block bg-cyan-700 px-4 py-2 rounded-xl text-white text-center"
                  >
                      <NavLink to='signin'>SignIn</NavLink>
                  </button>
                </li>
                <li className="">
                  <button
                    className="block bg-cyan-700 px-4 py-2 rounded-xl text-white text-center"
                  >
                      <NavLink to='signup'>SignUp</NavLink>
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
