import React from "react";
import { Outlet } from "react-router-dom";

const Template = () => {
  return (
    <div className="mx-5 flex justify-center items-center">
      <Outlet />
    </div>
  );
};

export default Template;
