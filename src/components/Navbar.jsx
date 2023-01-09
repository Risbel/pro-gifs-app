import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex mb-6">
      <NavLink
        className={({ isActive }) =>
          isActive ? "bg-white mr-2 px-1 rounded-md" : "mr-2 px-1"
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "bg-white mr-2 px-1 rounded-md" : "mr-2 px-1"
        }
        to={"/app"}
      >
        Get Started
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "bg-white mr-2 px-1 rounded-md" : "mr-2 px-1"
        }
        to={"/details"}
      >
        Details
      </NavLink>
    </nav>
  );
};
