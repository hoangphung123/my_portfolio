import React, { useState } from 'react';
import './HeroImageGridModal.css';

const HeroImageGridModal = ({ images = [], title, description, onClose }) => {
  const [mainIdx, setMainIdx] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="gallery-modal" onClick={e => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>×</button>
        <div className="gallery-main-img-wrapper" style={{position: 'relative'}}>
          <img
            className={`gallery-main-img${isZoomed ? ' zoomed' : ''}`}
            src={images[mainIdx]}
            alt={title}
            onClick={e => {
              e.stopPropagation();
              setIsZoomed(z => !z);
            }}
          />
          {!isZoomed && (
            <span className="zoom-icon" title="Click to zoom">🔍</span>
          )}
          {isZoomed && (
            <div
              className="zoomed-img-overlay"
              onClick={e => {
                e.stopPropagation();
                setIsZoomed(false);
              }}
            >
              <img
                className="zoomed-img"
                src={images[mainIdx]}
                alt={title}
              />
            </div>
          )}
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