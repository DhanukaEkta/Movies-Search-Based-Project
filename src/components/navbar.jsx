import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <h2>MoviesOnline</h2>
      <div className="links">
        
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        
      </div>
    </div>
  );
};


