import React from "react";
import '../styles/Header.css';
import logo from '../assets/Logo.png'
import heart from '../assets/heart.png'
import arrow from '../assets/arrow-d.png'
import profile from '../assets/profile.png'
import shoppingBag from '../assets/shopping-bag.png'
import Search from "../assets/search-normal.png"
import el from '../assets/el.png'
const Header = () => {
  return (
    <header className="header">
      <div className="top-bar">
        <span className="iconsEng">
          {" "}
          <img src={el} alt="Logo" className="el" />
          <p className="text-top-head"> Lorem ipsum dolor</p>
        </span>
        <span className="iconsEng">
          {" "}
          <img src={el} alt="Logo" className="el" />
          <p className="text-top-head"> Lorem ipsum dolor</p>
        </span>
        <span className="iconsEng">
          {" "}
          <img src={el} alt="Logo" className="el" />
          <p className="text-top-head"> Lorem ipsum dolor</p>
        </span>
      </div>
      <div className="main-header">
        <div className="logo-section">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <div>
          <h1 className="heading-head">LOGO</h1>
        </div>

        <div className="icons-section">
          <a href="/">
            <img src={Search} alt="Logo" className="icons" />
          </a>
          <a href="/">
            <img src={heart} alt="Logo" className="icons" />
          </a>
          <a href="/">
            <img src={shoppingBag} alt="Logo" className="icons" />
          </a>
          <a href="/">
            <img src={profile} alt="Logo" className="icons" />
          </a>
          <a href="/">
            <span className="iconsEng">
              <p className="engText">ENG</p>
              <img src={arrow} alt="Down Arrow" />
            </span>
          </a>
        </div>
      </div>
      <div className="parent-nav-links">
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
