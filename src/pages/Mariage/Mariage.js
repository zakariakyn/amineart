import React from 'react';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';
import '../Soiree/Soiree.css';
import './Mariage.css';

const partnerSlides = [
  [
    { src: 'https://placehold.co/140x80/B8963E/FFFFFF?text=Partner+1', alt: 'Partner 1' },
    { src: 'https://placehold.co/140x80/9A7A2F/FFFFFF?text=Partner+2', alt: 'Partner 2' },
    { src: 'https://placehold.co/140x80/8B7355/FFFFFF?text=Partner+3', alt: 'Partner 3' },
    { src: 'https://placehold.co/140x80/6B5335/FFFFFF?text=Partner+4', alt: 'Partner 4' },
  ]
];

function Mariage() {
  return (
    <div className="mariage-page">
      <HeroBanner title="Mariage" />
      <div className="event-page-content">
        <h2>Mariage</h2>
        <p>Soiree text — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amine Art Events crée des mariages de rêve avec une attention particulière aux détails. De la décoration florale aux arrangements musicaux, nous nous occupons de tout pour que votre journée soit parfaite.</p>
        <img
          src="https://placehold.co/1200x420/6B5335/FFFFFF?text=Mariage+Event"
          alt="Mariage"
          className="event-main-image"
        />
        <div className="partners-section">
          <h3>Nos Partenaires d'Or</h3>
          <ImageCarousel slides={partnerSlides} type="partners" />
        </div>
      </div>
    </div>
  );
}

export default Mariage;
