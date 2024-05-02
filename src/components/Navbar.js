import React from "react";
import "./stylesheet/Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [navColor, setNavColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };
  const handleClick = () => {
    let newvalue = !showNav;
    console.log(newvalue);
    setShowNav(newvalue);
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div className={navColor ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Ujjwal Sotra</h1>
      </Link>
      <ul className={showNav ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Project">Project</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link
            to="https://drive.google.com/file/d/1jF3zzTZFylil2fnGQSQbmkPsheZ31lTt/view?usp=sharing"
            target="_blank"
          >
            Resume
          </Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {showNav ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
