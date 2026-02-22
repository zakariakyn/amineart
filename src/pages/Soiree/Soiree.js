import React from 'react';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';
import './Soiree.css';

const partnerSlides = [
  [
    { src: 'https://placehold.co/140x80/B8963E/FFFFFF?text=Partner+1', alt: 'Partner 1' },
    { src: 'https://placehold.co/140x80/9A7A2F/FFFFFF?text=Partner+2', alt: 'Partner 2' },
    { src: 'https://placehold.co/140x80/8B7355/FFFFFF?text=Partner+3', alt: 'Partner 3' },
    { src: 'https://placehold.co/140x80/6B5335/FFFFFF?text=Partner+4', alt: 'Partner 4' },
  ]
];

function Soiree() {
  return (
    <div className="soiree-page">
      <HeroBanner title="Soirée" />
      <div className="event-page-content">
        <h2>Soiree</h2>
        <p>Soiree text — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amine Art Events organise des soirées mémorables avec un décor élégant, une ambiance festive et un service impeccable. Chaque soirée est une expérience unique conçue pour vous et vos invités.</p>
        <img
          src="https://placehold.co/1200x420/8B7355/FFFFFF?text=Soiree+Event"
          alt="Soirée"
          className="event-main-image"
        />
        <div className="partners-section">
          <h3>textOur Golden Partners</h3>
          <ImageCarousel slides={partnerSlides} type="partners" />
        </div>
      </div>
    </div>
  );
}

export default Soiree;
