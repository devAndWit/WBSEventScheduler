import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const NotFound = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <>
      <div>Sorry, this site is not available.</div>
      <Link
        to="/"
        className="p-4 rounded-lg bg-slate-600 w-1/3 m-auto text-gray-50 focus:outline-none active:outline-none border-none antialiased text-center"
      >
        Home
      </Link>
    </>
  );
};

export default NotFound;
