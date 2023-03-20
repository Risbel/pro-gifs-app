import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="z-40 backdrop-blur-md fixed border-b border-slate-400 bg-gradient-to-l from-violet-900 to-transparent w-screen flex justify-center flex-wrap md:justify-between mb-2 md:mb-6 py-2 md:px-4 text-sm md:text-xl   text-slate-100">
        <div className="hidden md:block">
          <NavLink className="hover:shadow-xl hover:shadow-indigo-500/50" to={"/"}>
            Beautiful Gifts
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-violet-100 text-slate-700 mr-1 md:mr-2 p-2 rounded-md"
                : "rounded-md mr-1 md:mr-2 p-2  hover:bg-violet-500 "
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-violet-100 text-slate-700 mr-1 md:mr-2 p-2 rounded-md"
                : "rounded-md mr-1 md:mr-2 p-2  hover:bg-violet-500 "
            }
            to={"/app"}
          >
            Get Started
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-violet-100 text-slate-700 mr-1 md:mr-2 p-2 rounded-md"
                : "rounded-md mr-1 md:mr-2 p-2  hover:bg-violet-500 "
            }
            to={"/details"}
          >
            Details
          </NavLink>
        </div>
      </nav>
    </>
  );
};
