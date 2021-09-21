import React from "react";
import { Link } from "react-router-dom";
import { FaPizzaSlice, FaBeer } from "react-icons/fa";
import "./NavBar.css";
import "../App.css";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/food" className="navbar-logo">
            <FaPizzaSlice size="50px" />
          </Link>
          <Link to="/drinks" className="navbar-logo">
            <FaBeer size="50px" />
          </Link>
        </div>
        <br />
      </div>
    </>
  );
};

export default NavBar;
