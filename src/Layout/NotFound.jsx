import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const NotFound = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <>
      <main className="flex flex-col gap-4 h-[50vh] items-center">
        <p className="h-1/2">
          <span className="block p-10">Sorry, this site is not available.</span>
        </p>
        <p className="h-1/2">
          <Link
            to="/"
            className="px-4 py-2 rounded-lg bg-slate-600 w-1/3 m-auto text-gray-50 focus:outline-none active:outline-none border-none antialiased text-center"
          >
            Home
          </Link>
        </p>
      </main>
    </>
  );
};

export default NotFound;
