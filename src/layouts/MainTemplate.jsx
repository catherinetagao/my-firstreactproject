import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainTemplate = () => {
  return (
    <div className="flex flex-col min-h-screen font-['Arial']">
      <Navbar />
      <main className="flex flex-1 items-center justify-center w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainTemplate;
