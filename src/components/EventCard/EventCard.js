import React from 'react';
import { Link } from 'react-router-dom';
import './EventCard.css';

function EventCard({ title, subtitle, imageSrc, linkTo, reverse = false }) {
  return (
    <div className={`event-card${reverse ? ' reverse' : ''}`}>
      <img src={imageSrc} alt={title} className="event-card-image" />
      <div className="event-card-info">
        <h2>{title}</h2>
        <p className="event-subtitle">{subtitle}</p>
        <Link to={linkTo}>En savoir plus</Link>
      </div>
    </div>
  );
}

export default EventCard;
