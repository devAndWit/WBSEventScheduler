// header.jsx
import React from "react";
import { useAuth } from "../context/AuthProvider";
import { useAppContext } from "../context/AppContext";

const Header = () => {
  const { isAuthenticated, login, logout } = useAuth();
  const { setCurrentView } = useAppContext();

  return (
    <header className="p-4 bg-blue-600 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">Event App</h1>
      <nav>
        {!isAuthenticated ? (
          <>
            <button
              onClick={() => setCurrentView("login")}
              className="bg-gray-800 px-4 py-2 rounded mr-2"
            >
              Login
            </button>
            <button
              onClick={() => setCurrentView("signup")}
              className="bg-gray-800 px-4 py-2 rounded"
            >
              Sign Up
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setCurrentView("events")}
              className="bg-gray-800 px-4 py-2 rounded mr-2"
            >
              Events
            </button>
            <button onClick={logout} className="bg-red-500 px-4 py-2 rounded">
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
