import React from "react";
import "./App.scss";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = { color: "black", textDecoration: "none" };
  return (
    <nav>
      <Link to="/" style={navStyle}>
        <h3>Home</h3>
      </Link>
      <ul>
        <Link to="/about" style={navStyle}>
          <li>About</li>
        </Link>
        <Link to="/contact" style={navStyle}>
          <li>Contact</li>
        </Link>
        <Link to="/nasa" style={navStyle}>
          <li>Nasa</li>
        </Link>
        <Link to="/meteo" style={navStyle}>
          <li>Météo</li>
        </Link>
        <Link to="/image_anim" style={navStyle}>
          <li>Anim gsap</li>
        </Link>
        <Link to="/todoApp" style={navStyle}>
          <li>Todo App</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
