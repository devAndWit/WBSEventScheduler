import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Home;
