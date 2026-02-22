import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

function ServiceCard({ title, subtitle, imageSrc, linkTo }) {
  return (
    <div className="service-card">
      <img src={imageSrc} alt={title} />
      <div className="service-card-overlay">
        <h3>{title}</h3>
        <p className="service-card-subtitle">{subtitle}</p>
        <Link to={linkTo}>En savoir plus</Link>
      </div>
    </div>
  );
}

export default ServiceCard;
