import React, { useState } from "react";
import "../styles/Header.css";
import logo from "../assets/Logo.png";
import heart from "../assets/heart.png";
import arrow from "../assets/arrow-d.png";
import profile from "../assets/profile.png";
import shoppingBag from "../assets/shopping-bag.png";
import Search from "../assets/search-normal.png";
import el from "../assets/el.png";
import hamburger from "../assets/hamburger.png"; // Add a hamburger icon

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <header className="header">
      <div className="top-bar">
        <span className="iconsEng">
          <img src={el} alt="Icon" className="el" />
          <p className="text-top-head">Lorem ipsum dolor</p>
        </span>
        <span className="iconsEng">
          <img src={el} alt="Icon" className="el" />
          <p className="text-top-head">Lorem ipsum dolor</p>
        </span>
        <span className="iconsEng">
          <img src={el} alt="Icon" className="el" />
          <p className="text-top-head">Lorem ipsum dolor</p>
        </span>
      </div>

      <div className="main-header">
        <div className="logo-section">
          <img
            src={hamburger}
            alt="Hamburger Menu"
            className="hamburger-icon"
            onClick={toggleNavVisibility}
          />
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <div>
          <h1 className="heading-head">LOGO</h1>
        </div>

        <div className="icons-section">
          <a href="/">
            <img src={Search} alt="Search Icon" className="icons" />
          </a>
          <a href="/">
            <img src={heart} alt="Heart Icon" className="icons" />
          </a>
          <a href="/">
            <img src={shoppingBag} alt="Shopping Bag Icon" className="icons" />
          </a>
          <a href="/">
            <img src={profile} alt="Profile Icon" className="icons" />
          </a>
          <a href="/">
            <span className="iconsEng">
              <p className="engText">ENG</p>
              <img src={arrow} alt="Down Arrow" />
            </span>
          </a>
        </div>
      </div>

      <div className={`nav-container ${isNavVisible ? "visible" : ""}`}>
        <nav className="nav-links">
          <a href="/" className="nav-name">
            SHOP
          </a>
          <a href="/" className="nav-name">
            SKILLS
          </a>
          <a href="/" className="nav-name">
            STORIES
          </a>
          <a href="/" className="nav-name">
            ABOUT
          </a>
          <a href="/" className="nav-name">
            CONTACT US
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
