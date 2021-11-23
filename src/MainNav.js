import React from "react";
import { NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <>
      <div className="flex">
        <NavLink className="nav-link" to="/signup">
          Sign Up
        </NavLink>

        <NavLink className="nav-link" to="/">
          Sign In
        </NavLink>
      </div>
    </>
  );
};

export default MainNav;
