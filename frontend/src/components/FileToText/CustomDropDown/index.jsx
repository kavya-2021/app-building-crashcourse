import React, { useState } from "react";
import {
  DisplayContainer,
  DropDownContainer,
  Options,
  OptionsContainer,
} from "./style";

export const CustomDropdown = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div>
      <DropDownContainer onClick={toggleDropdown} isOpen={isOpen}>
        <DisplayContainer isOpen={isOpen}>
          {selectedOption || "Select file type"}
          <img src="/Icons/dropDownIcon.png" alt="arrow" />
        </DisplayContainer>
      </DropDownContainer>
      <OptionsContainer isOpen={isOpen}>
        {["Audio", "Video"].map((option) => (
          <Options
            key={option}
            onClick={() => handleOptionClick(option)}
            isSelected={selectedOption === option}
          >
            {option}
          </Options>
        ))}
      </OptionsContainer>
    </div>
  );
};
