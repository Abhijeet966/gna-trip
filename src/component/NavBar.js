// NavBar.jsx

import React from "react";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>TripWeb</span>
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Categories</li>
        <li>Destinations</li>
        <li>Blog</li>
        <li>Pages</li>
        <li>DashBoard</li>
        <li>Contact</li>
      </ul>
      <div className="buttons">
        <button className="expert-btn">Become An Expert</button>
        <button className="sign-btn">Sign In / Register</button>
      </div>
    </nav>
  );
};

export default NavBar;
