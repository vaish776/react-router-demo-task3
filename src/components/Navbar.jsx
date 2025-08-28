import React from "react";
import { NavLink } from "react-router-dom";

const activeStyle = {
  fontWeight: "bold",
  textDecoration: "underline",
  color: "#007acc",
};

const Navbar = () => {
  return (
    <nav style={{
      padding: "1rem 2rem",
      backgroundColor: "#f8f9fa",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      display: "flex",
      gap: "1.5rem"
    }}>
      <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Home</NavLink>
      <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : undefined)}>About</NavLink>
    </nav>
  );
};

export default Navbar;
