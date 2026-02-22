import React from 'react';
import { Link } from 'react-router-dom';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';
import EventCard from '../../components/EventCard/EventCard';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';
import ContactForm from '../../components/ContactForm/ContactForm';
import './Home.css';

const heroSlides = [
  {
    src: 'https://placehold.co/1920x500/8B7355/FFFFFF?text=Mariage+Elegant',
    alt: 'Mariage Elegant',
    text: 'Bienvenue à Notre Mariage'
  },
  {
    src: 'https://placehold.co/1920x500/6B5335/FFFFFF?text=Soiree+Festive',
    alt: 'Soirée Festive',
    text: 'Une Soirée Inoubliable'
  },
  {
    src: 'https://placehold.co/1920x500/9A7A2F/FFFFFF?text=Decoration+Luxueuse',
    alt: 'Décoration Luxueuse',
    text: 'Décoration Luxueuse'
  }
];

const testimonials = [
  {
    nom: 'Sophie Martin',
    message: 'Une équipe exceptionnelle qui a rendu notre mariage magique. Chaque détail était parfait!'
  },
  {
    nom: 'Ahmed Benali',
    message: 'Service impeccable et professionnalisme remarquable. Nous recommandons vivement Amine Art Events.'
  }
];

function Home() {
  return (
    <div>
      {/* Hero Carousel */}
      <section className="home-hero">
        <ImageCarousel slides={heroSlides} type="hero" autoPlay={true} interval={5000} />
      </section>

      {/* Événements */}
      <section className="home-evenements">
        <h2 className="section-title">Événements</h2>
        <div className="events-list">
          <EventCard
            title="Soirée"
            subtitle="harmonious Park"
            imageSrc="https://placehold.co/800x320/8B7355/FFFFFF?text=Soiree"
            linkTo="/evenements/soiree"
            reverse={false}
          />
          <EventCard
            title="Mariage"
            subtitle="Harmonious Park"
            imageSrc="https://placehold.co/800x320/6B5335/FFFFFF?text=Mariage"
            linkTo="/evenements/mariage"
            reverse={true}
          />
        </div>
      </section>

      {/* Services */}
      <section className="home-services">
        <div className="home-services-inner">
          <h2 className="section-title">Services</h2>
          <div className="services-grid-border">
            <div className="services-top-row">
              <ServiceCard
                title="Éclairage"
                subtitle="Community Square"
                imageSrc="https://placehold.co/400x220/B8963E/FFFFFF?text=Eclairage"
                linkTo="/services/eclairage"
              />
              <ServiceCard
                title="Structure"
                subtitle="Harmonious Park"
                imageSrc="https://placehold.co/400x220/9A7A2F/FFFFFF?text=Structure"
                linkTo="/services/structure"
              />
              <ServiceCard
                title="Sonorisation"
                subtitle="Community Square"
                imageSrc="https://placehold.co/400x220/8B7355/FFFFFF?text=Sonorisation"
                linkTo="/services/sonorisation"
              />
            </div>
            <div className="services-bottom-row">
              <ServiceCard
                title="Décoration"
                subtitle="Harmonious Park"
                imageSrc="https://placehold.co/400x220/6B5335/FFFFFF?text=Decoration"
                linkTo="/services/decoration"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials preview */}
      <section className="home-testimonials">
        <h2 className="section-title">Meilleurs vœux</h2>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} nom={t.nom} message={t.message} />
          ))}
        </div>
        <div className="testimonials-more">
          <Link to="/temoignages" className="btn-outline-gold">En savoir plus</Link>
        </div>
      </section>

      {/* Contact */}
      <section className="home-contact">
        <div className="home-contact-inner">
          <h2>Restez en contact avec nous</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

export default Home;
