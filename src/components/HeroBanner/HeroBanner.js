import React from 'react';
import './HeroBanner.css';

function HeroBanner({ title }) {
  return (
    <div className="hero-banner">
      <img
        src="https://placehold.co/1920x400/8B7355/FFFFFF?text=Amine+Art+Events"
        alt="Banner"
        className="hero-banner-image"
      />
      <div className="hero-banner-overlay"></div>
      <h1 className="hero-banner-title">{title}</h1>
    </div>
  );
}

export default HeroBanner;
