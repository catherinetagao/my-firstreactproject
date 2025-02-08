import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Template1 = () => {
  return (
    <div className="flex justify-center items-center">
      <Outlet />
    </div>
  );
};

export default Template1;
