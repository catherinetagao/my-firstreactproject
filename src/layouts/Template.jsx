import React from "react";
import { Outlet } from "react-router-dom";

const Template = () => {
  return (
    <div className="mx-5">
      <Outlet />
    </div>
  );
};

export default Template;
