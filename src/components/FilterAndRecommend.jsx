import React, { useState } from "react";
import "../styles/FilterAndRecommend.css";
import leftArrow from "../assets/arrow-left.png"; // Import left arrow image
import rightArrow from "../assets/arrow-r.png"; // Import right arrow image
import arrowD from "../assets/arrow-d.png";
const FilterAndRecommend = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="filter-recommend-container">
      <div className="filter-section">
        <span className="item-count">3425 ITEMS</span>
        <button onClick={toggleSidebar} className="filter-toggle-button">
          <img
            src={isSidebarVisible ? leftArrow : rightArrow}
            alt={isSidebarVisible ? "Left Arrow" : "Right Arrow"}
            className="arrow-icon"
          />
          {isSidebarVisible ? "HIDE FILTER" : "SHOW FILTER"}
        </button>
      </div>
      <div className="recommend-section">
        <span className="recommended-text">RECOMMENDED</span>
        <img src={arrowD} alt="Down Arrow" className="recommend-arrow-down" />
      </div>
    </div>
  );
};

export default FilterAndRecommend;
