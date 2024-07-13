import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Template = () => {
  return (
    <div className="flex flex-col min-h-screen m-0">
      <Navbar />
      <main className="flex-1 m-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Template;
