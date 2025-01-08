// Home.jsx
import React from "react";
import Container from "../components/container";
import Header from "../components/Header";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow max-h-screen">
        <Container />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
