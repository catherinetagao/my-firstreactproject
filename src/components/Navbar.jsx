import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/project", label: "Projects" },
  { to: "/notes", label: "Notes" },
  { to: "/about", label: "About" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/80">
      <nav
        className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <Link
          to="/"
          className="rounded-lg text-lg font-black tracking-tight text-slate-950 transition hover:text-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-100 dark:text-white dark:hover:text-indigo-300 dark:focus:ring-indigo-950"
        >
          <span className="text-indigo-600 dark:text-indigo-400">&lt;</span>
          CathTagao
          <span className="text-indigo-600 dark:text-indigo-400">/&gt;</span>
        </Link>

        <div className="hidden items-center gap-1 sm:flex">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <Link to="/project" className="btn-primary hidden py-2.5 sm:inline-flex">
          Explore <FaArrowRight aria-hidden="true" />
        </Link>

        <div className="sm:hidden">
          <Link
            to="/project"
            className="rounded-lg px-3 py-2 text-sm font-bold text-indigo-600 dark:text-indigo-300"
          >
            Projects
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
