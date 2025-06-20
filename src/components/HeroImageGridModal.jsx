import React, { useState } from 'react';
import './HeroImageGridModal.css';

const HeroImageGridModal = ({ images = [], title, description, onClose }) => {
  const [mainIdx, setMainIdx] = useState(0);
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="gallery-modal" onClick={e => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>×</button>
        <div className="gallery-main-img-wrapper">
          <img className="gallery-main-img" src={images[mainIdx]} alt={title} />
        </div>
        <div className="gallery-thumbnails">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={title + ' thumb ' + (i+1)}
              className={mainIdx === i ? 'active' : ''}
              onClick={() => setMainIdx(i)}
            />
          ))}
        </div>
        <div className="gallery-info">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroImageGridModal; 