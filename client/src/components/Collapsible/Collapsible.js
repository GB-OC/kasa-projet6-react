import React, { useState } from "react";
import chevronUp from "./ChevronUp.svg"; 
import "./Collapsible.sass";

const Collapsible = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapsible">
      <div className={`collapsible-header ${isOpen ? "open" : ""}`} onClick={handleClick}>
        <div className="collapsible-title">{title}</div>
        <div className="collapsible-icon">
          <img src={chevronUp} alt="chevron" className="chevron" />
        </div>
      </div>
      <div className={"collapsible-body  " + (isOpen ? 'open' : '')}>                            
        <div className="collapsible-text">{text}</div>
      </div>
    </div>
  );
};

export default Collapsible;
