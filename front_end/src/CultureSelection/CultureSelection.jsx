import React from "react";
import "./CultureSelection.css";
import ArrowPic from "../attachments/arrow-pic.png";

const CultureSelection = () => {
  return (
    <div className="culture-selection-container">
      <div className="go-back-container">
        <img src={ArrowPic} alt="Arrow logo" className="arrow-pic" />
        <p className="go-back-p">Go back</p>
      </div>
      <h2 className="culture-selection-title">
        Select the culture that interests you
      </h2>
      <div className="culture-options-container">
        <button className="culture-options-btn">Asian</button>
        <button className="culture-options-btn">British</button>
        <button className="culture-options-btn">Canadian</button>
        <button className="culture-options-btn">Chinese</button>
        <button className="culture-options-btn">Classic</button>
        <button className="culture-options-btn">Egyptian</button>
        <button className="culture-options-btn">English</button>
        <button className="culture-options-btn">French</button>
        <button className="culture-options-btn">German</button>
        <button className="culture-options-btn">Indian</button>
        <button className="culture-options-btn">Irish</button>
        <button className="culture-options-btn">Italian</button>
        <button className="culture-options-btn">Japanese</button>
        <button className="culture-options-btn">Latin American</button>
        <button className="culture-options-btn">Polish</button>
        <button className="culture-options-btn">Russian</button>
        <button className="culture-options-btn">Scandinavian</button>
        <button className="culture-options-btn">Spanish</button>
        <button className="culture-options-btn">Swedish</button>
        <button className="culture-options-btn">Turkish</button>
      </div>
    </div>
  );
};

export default CultureSelection;
