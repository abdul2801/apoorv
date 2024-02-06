import React from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <div className="topnav">
        <div className="logo">
          <span>root@home:~#</span>
        </div>

        <div className="navbar">
          <NavLink to="/"  >Home</NavLink>
          
          <NavLink to="/upcoming">Past CTFs</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </div>
    </div>
  );
}
