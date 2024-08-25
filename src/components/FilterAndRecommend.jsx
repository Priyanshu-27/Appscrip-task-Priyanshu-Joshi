import React, { useState } from "react";
import "../styles/FilterAndRecommend.css";
import leftArrow from "../assets/arrow-left.png";
import rightArrow from "../assets/arrow-r.png";
import arrowD from "../assets/arrow-d.png";

const FilterAndRecommend = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
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
        <span className="recommended-text" onClick={toggleModal}>
          RECOMMENDED
        </span>
        <img src={arrowD} alt="Down Arrow" className="recommend-arrow-down" />
        {isModalVisible && (
          <div className="recommend-modal">
            <ul>
              <li>Newest First</li>
              <li>Popular</li>
              <li>Price: High to Low</li>
              <li>Price: Low to High</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterAndRecommend;
