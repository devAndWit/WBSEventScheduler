// header.jsx
import React from "react";
import { useAuth } from "../context/AuthProvider";
import { useAppContext } from "../context/AppContext";

const Header = () => {
  const { setCurrentView } = useAppContext();
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="p-4 bg-blue-500 text-white flex justify-between items-center">
      <img
        src="src\asserts\logo_event_scheduler.png"
        alt="Logo"
        className="w-10 h-10 "
      />
      <h1 className="text-3xl font-bold">Event Scheduler</h1>
      <div>
        <button
          onClick={() => setCurrentView("events")}
          className="px-4 py-2  border border-white bg-transparent  rounded-lg mr-2"
        >
          Home
        </button>
        {!isAuthenticated ? (
          <>
            <button
              onClick={() => setCurrentView("login")}
              className="px-4 py-2 bg-transparent  border border-white rounded-lg mr-2"
            >
              Login
            </button>
            <button
              onClick={() => setCurrentView("signup")}
              className="px-4 py-2  border border-white bg-transparent  rounded-lg"
            >
              Sign Up
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setCurrentView("create-event")}
              className="px-4 py-2   border border-white bg-transparent rounded-lg mr-2"
            >
              Create Event
            </button>
            <button
              onClick={logout}
              className="px-4 py-2   border border-white bg-transparent rounded-lg"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
