import React from "react";
import "./Navbar.css";
import logo from "../../images/logo.svg";

const Navbar = () => {
  return (
    <>
      <nav className="flexStartCol">
        <img src={logo} alt="logo" className="logo" />
        <ul className="navLinks">
          <li>
            <a href="index.html">Features</a>
          </li>
          <li>
            <a href="index.html">Team</a>
          </li>
          <li>
            <a href="index.html">Sign In</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
