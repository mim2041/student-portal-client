import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "text-blue-800  font-bold border-b-2 border-blue-600" : "hover:text-orange-500 "
      }
    >
      <span className="px-3"> {children}</span>
    </NavLink>
  );
};

export default ActiveLink;
