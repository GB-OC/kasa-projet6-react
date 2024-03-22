import React, { useState } from 'react';
import data from '../../data.json';
import arrow from './ArrowVector.svg';
import './ImageSlider.css'; 

function ImageSlider({ id }) {
  const item = data.find(item => item.id === id);
  const [index, setIndex] = useState(0);

  if (!item) return null;

  const prev = () => setIndex((index - 1 + item.pictures.length) % item.pictures.length);
  const next = () => setIndex((index + 1) % item.pictures.length);

  return (
    <div className="image-slider">
      <span className="slider-arrow left-arrow" onClick={prev}>
        <img src={arrow} alt="left arrow" className="arrow-img left-arrow-img" />
      </span>

      <img src={item.pictures[index]} alt={`Property ${index + 1}`} />
      <div className="counter">{index + 1}/{item.pictures.length}</div>
      <span className="slider-arrow right-arrow" onClick={next}>
        <img src={arrow} alt="right arrow" className="arrow-img right-arrow-img" />
      </span>
    </div>
  );
}

export default ImageSlider;
