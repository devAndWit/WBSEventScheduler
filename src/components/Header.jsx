import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import logo from "../assets/logo_event_scheduler.png";

const Header = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <header className="flex bg-slate-400 p-4">
      <div className="flex w-full items-center">
        <img src={logo} alt="website logo" className="block w-12 h-12" />
        <h1 className="text-2xl px-4 align-middle">Event Scheduler</h1>
      </div>
      <div className="flex w-full items-center justify-end">
        <nav className="">
          <ul className="flex w-full items-center">
            {isAuthenticated ? (
              <>
                <li className="mx-4">
                  <Link
                    className="block bg-cyan-700 px-4 py-2 rounded-xl text-white text-center"
                    to="/createEvent"
                  >
                    Create Event
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="block bg-cyan-700 px-4 py-2 rounded-xl text-white text-center"
                    to="/logout"
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="mx-4">
                  <Link
                    className="block bg-cyan-700 px-4 py-2 rounded-xl text-white text-center"
                    to="/signin"
                  >
                    SignIn
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="block bg-cyan-700 px-4 py-2 rounded-xl text-white text-center"
                    to="/signup"
                  >
                    SignUp
                  </Link>
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
