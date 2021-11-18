import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./NavigateBar.css";
function NavigateBar() {
  return (
    <div className="Navigatebar">
      <Link className="Navlink" to="/">
        Welcome!
      </Link>
      <div className="SignupLogin">
        <NavLink className="Signup" to="/signup">
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
