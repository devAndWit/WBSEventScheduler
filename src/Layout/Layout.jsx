import ContentContainer from "../components/ContentContainer.jsx";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Outlet} from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col" >
      <Header />
        <ContentContainer>
            <Outlet/>
        </ContentContainer>
      <Footer />
    </div>
  );
};

export default Layout;
