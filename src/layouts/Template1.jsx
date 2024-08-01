import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Template1 = () => {
  return (
    <div className="grid grid-cols-6 gap-12 ">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-5 mx-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Template1;
