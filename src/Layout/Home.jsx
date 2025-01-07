// Home.jsx
import React from "react";
import { useAppContext } from "../context/AppContext";
import { useAuth } from "../context/AuthProvider";
import Container from "../components/container";

const Header = () => {
  const { setCurrentView } = useAppContext();
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="p-4 bg-blue-500 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">Event Scheduler</h1>
      <div>
        {!isAuthenticated ? (
          <>
            <button
              onClick={() => setCurrentView("login")}
              className="px-4 py-2 bg-gray-700 rounded-lg mr-2"
            >
              Login
            </button>
            <button
              onClick={() => setCurrentView("signup")}
              className="px-4 py-2 bg-gray-700 rounded-lg"
            >
              Sign Up
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setCurrentView("create-event")}
              className="px-4 py-2 bg-green-600 rounded-lg mr-2"
            >
              Create Event
            </button>
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-600 rounded-lg"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="p-4 bg-gray-800 text-white text-center">
    © 2025 Event Scheduler
  </footer>
);

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Container />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
