import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigateBar.css";
function NavigateBar() {
  return (
    <div className="Navigatebar">
      <NavLink className="Navlink" to="/">
        Welcome!
      </NavLink>
      <div className="SignupLogin">
        <NavLink className="SignupNav" to="/signup">
          Sign up
        </NavLink>
        <NavLink className="Login" to="/login">
          Sign in
        </NavLink>
      </div>
    </div>
  );
}

export default NavigateBar;
