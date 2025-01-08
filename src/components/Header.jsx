import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { useAppContext } from "../context/AppContext";
import logo from "../assets/logo_event_scheduler.png";

const Header = () => {
  const { isAuthenticated, login, logout } = useAuth();
  const { setCurrentView } = useAppContext();

  return (
    <header className="flex bg-slate-400 p-4">
      <div className="flex w-full items-center">
        <img src={logo} alt="website logo" className="block w-12 h-12" />
        <h1 className="text-2xl px-4 align-middle">Event Scheduler</h1>
      </div>
      <div className="flex w-full items-center justify-end">
        <nav className="">
          <ul className="flex w-full items-center">
            <li className="">
              <botton
                onClick={() => setCurrentView("logout")}
                className="block bg-cyan-700 px-4 py-2 rounded-xl text-white text-center"
              >
                Logout for Test
              </botton>
            </li>
            <li className="mx-4">
              <button
                onClick={() => setCurrentView("create")}
                className="block bg-cyan-700 px-4 py-2 rounded-xl text-white text-center"
              >
                Event Create for Test
              </button>
            </li>
            <li className="mx-4">
              <button
                onClick={() => setCurrentView("events")}
                className="block bg-cyan-700 px-4 py-2 rounded-xl text-white text-center"
              >
                Home
              </button>
            </li>
            {isAuthenticated ? (
              <>
                <li className="mx-4">
                  <button
                    onClick={() => setCurrentView("create")}
                    className="block bg-cyan-700 px-4 py-2 rounded-xl text-white text-center"
                  >
                    Create Event
                  </button>
                </li>
                <li className="">
                  <botton
                    onClick={() => setCurrentView("logout")}
                    className="block bg-cyan-700 px-4 py-2 rounded-xl text-white text-center"
                  >
                    Logout
                  </botton>
                </li>
              </>
            ) : (
              <>
                <li className="mx-4">
                  <botton
                    onClick={() => setCurrentView("login")}
                    className="block bg-cyan-700 px-4 py-2 rounded-xl text-white text-center"
                  >
                    SignIn
                  </botton>
                </li>
                <li className="">
                  <botton
                    onClick={() => setCurrentView("signup")}
                    className="block bg-cyan-700 px-4 py-2 rounded-xl text-white text-center"
                  >
                    SignUp
                  </botton>
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
