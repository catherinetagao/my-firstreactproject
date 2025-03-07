import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // Navbar
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link className="uppercase font-bold pl-8 font-['Arial_Black']" to={""}>
          &lt;CathTagao/&gt;
        </Link>
      </div>
      <div className="flex-none uppercase font-['Arial_Black']">
        <ul className="menu menu-horizontal px-1">
          <li className="mr-2">
            <Link to={""}>Home</Link>
          </li>
          <li>
            <Link to={"/project"}>Project</Link>
            
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
