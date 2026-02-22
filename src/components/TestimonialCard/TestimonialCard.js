import React from 'react';
import './TestimonialCard.css';

function TestimonialCard({ nom, message }) {
  return (
    <div className="testimonial-card">
      <p className="testimonial-card-name">{nom}</p>
      <p className="testimonial-card-message">{message}</p>
    </div>
  );
}

export default TestimonialCard;
