import React, { useState } from "react";
import "./ChooseExperience.css";
import ArrowPic from "../attachments/arrow-pic.png";
import Logo from "../attachments/logo.svg";

const ChooseExperience = () => {
  const options = ["Literature", "Movies", "Music", "Food"];

  const [clicked, setClicked] = useState(Array(12).fill(false));

  const handleClick = (index) => {
    setClicked((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="choose-experience-container">
      <div className="go-back-container">
        <img src={ArrowPic} alt="Arrow logo" className="arrow-pic" />
        <p className="go-back-p">Go back</p>
      </div>
      <div className="logo-container">
        <img src={Logo} alt="Corporate logo" className="logo-pic" />
        
      </div>
      <h2 className="culture-selection-title">
        It's time to choose your entertainment option
      </h2>
      <div className="experience-options-container">
        {options.map((culture, index) => (
          <button
            key={culture}
            className={
              clicked[index]
                ? "culture-options-clicked-btn"
                : "culture-options-default-btn"
            }
            onClick={() => handleClick(index)}
          >
            {culture}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChooseExperience;
