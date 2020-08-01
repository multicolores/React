import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = { color: "black", textDecoration: "none" };
  return (
    <nav>
      <Link to="/" style={navStyle}>
        <h3>Logo</h3>
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
      </ul>
    </nav>
  );
}

export default Nav;
