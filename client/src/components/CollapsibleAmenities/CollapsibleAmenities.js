import React, { useState } from 'react';
import './CollapsibleAmenities.css';

const CollapsibleAmenities = ({ equipments }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAmenities = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapsible-amenities" onClick={toggleAmenities}>
      <div className="collapsible-amenities-title">Équipements</div>
      <div className={`collapsible-description-chevron ${isOpen ? 'rotate-chevron' : ''}`}>↑</div>
      {isOpen && (
        <div className="collapsible-amenities-list">
          <ul>
            {equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CollapsibleAmenities;