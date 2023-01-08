import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex mb-6">
      <NavLink
        style={({ isActive }) => ({ background: isActive && "white" })}
        className="mr-2 px-1 rounded-md"
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) => ({ background: isActive && "white" })}
        className="mr-2 px-1 rounded-md"
        to={"/app"}
      >
        Get Started
      </NavLink>
      <NavLink
        style={({ isActive }) => ({ background: isActive && "white" })}
        className="mr-2 px-1 rounded-md"
        to={"/details"}
      >
        Details
      </NavLink>
    </nav>
  );
};
