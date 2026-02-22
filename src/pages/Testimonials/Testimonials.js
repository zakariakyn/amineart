import React from 'react';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';
import './Testimonials.css';

const testimonials = [
  { nom: 'Sophie Martin', message: 'Une équipe exceptionnelle qui a rendu notre mariage magique. Chaque détail était parfait!' },
  { nom: 'Ahmed Benali', message: 'Service impeccable et professionnalisme remarquable. Je recommande vivement Amine Art Events.' },
  { nom: 'Marie Dupont', message: 'La décoration était absolument magnifique. Nos invités ont été impressionnés par le travail réalisé.' },
  { nom: 'Khalid Mansouri', message: 'Equipe très professionnelle et créative. Notre soirée était exactement comme nous l\'avions rêvée.' },
  { nom: 'Laura Petit', message: 'Merci à toute l\'équipe pour avoir rendu notre événement si spécial. Nous reviendrons certainement.' },
  { nom: 'Youssef Alaoui', message: 'Une expérience inoubliable. La sonorisation et l\'éclairage étaient de très haute qualité.' },
];

function Testimonials() {
  return (
    <div className="testimonials-page">
      <HeroBanner title="Témoignages" />
      <div className="testimonials-content">
        <h2>Meilleurs vœux</h2>
        <div className="testimonials-full-grid">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} nom={t.nom} message={t.message} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
