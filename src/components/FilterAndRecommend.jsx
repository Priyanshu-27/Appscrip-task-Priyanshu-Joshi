import React, { useState } from "react";
import "../styles/FilterAndRecommend.css";
import arrow from "../assets/arrow-d.png";
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
          {isSidebarVisible ? "HIDE FILTER" : "SHOW FILTER"}
        </button>
      </div>
      <div className="recommend-section">
        <span className="recommended-text">RECOMMENDED</span>
        <img src={arrow} alt="Down Arrow" />
      </div>
    </div>
  );
};

export default FilterAndRecommend;
