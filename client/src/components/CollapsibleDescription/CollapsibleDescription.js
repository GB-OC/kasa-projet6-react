import React, { useState } from 'react';
import './CollapsibleDescription.css';

function CollapsibleDescription({ description }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`description-container ${isOpen ? 'open' : ''}`} onClick={handleClick}>
      <div className="description-header">
        <h3 className="description-title">Description</h3>
        <span className={`chevron ${isOpen ? 'rotate' : ''}`}>∨</span>
      </div>
      {isOpen && <p className="description-content">{description}</p>}
    </div>
  );
}

export default CollapsibleDescription;
