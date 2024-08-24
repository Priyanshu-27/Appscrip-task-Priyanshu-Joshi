import React, { useState } from "react";
import "../styles/Sidebar.css"; // Importing CSS file

import downArrow from "../assets/arrow-d.png"; // Import down arrow image
import upArrow from "../assets/arrow-u.png"; // Import up arrow image

const Sidebar = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const renderSection = (title) => (
    <div className="sidebar-section">
      <div className="section-header" onClick={() => toggleSection(title)}>
        <span className="custom-text">{title.toUpperCase()}</span>
        <img
          src={openSections[title] ? upArrow : downArrow}
          alt="Arrow Icon"
          className="arrow-icon"
        />
      </div>
      {openSections[title] && <div className="section-content">All</div>}
    </div>
  );

  return (
    <div className="sidebar">
      <div className="customizable">
        <input type="checkbox" id="customize" />
        <label htmlFor="customize" className="custom-text">
          CUSTOMIZABLE
        </label>
      </div>
      {renderSection("Ideal For")}
      {renderSection("Occasion")}
      {renderSection("Work")}
      {renderSection("Fabric")}
      {renderSection("Segment")}
      {renderSection("Suitable For")}
      {renderSection("Raw Materials")}
      {renderSection("Pattern")}
    </div>
  );
};

export default Sidebar;
