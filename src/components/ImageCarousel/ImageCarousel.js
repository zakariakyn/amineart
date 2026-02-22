import React, { useState, useEffect, useCallback } from 'react';
import './ImageCarousel.css';

function ImageCarousel({ slides, type = 'default', autoPlay = false, interval = 5000 }) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % slides.length);
  }, [slides.length]);

  const prev = () => {
    setCurrent(prev => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, next]);

  if (type === 'partners') {
    return (
      <div className="carousel partners-carousel">
        <button className="carousel-btn prev" onClick={prev} aria-label="Précédent">&#8592;</button>
        <div className="carousel-inner" style={{ transform: `translateX(-${current * 100}%)` }}>
          {slides.map((slide, i) => (
            <div key={i} className="carousel-slide">
              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '20px', flexWrap: 'wrap' }}>
                {slide.map((logo, j) => (
                  <img key={j} src={logo.src} alt={logo.alt} className="partner-logo" />
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-btn next" onClick={next} aria-label="Suivant">&#8594;</button>
        <div className="carousel-dots">
          {slides.map((_, i) => (
            <button key={i} className={`carousel-dot${i === current ? ' active' : ''}`} onClick={() => setCurrent(i)} aria-label={`Diapositive ${i+1}`} />
          ))}
        </div>
      </div>
    );
  }

  if (type === 'hero') {
    return (
      <div className="carousel hero-carousel">
        <button className="carousel-btn prev" onClick={prev} aria-label="Précédent">&#8592;</button>
        <div className="carousel-inner" style={{ transform: `translateX(-${current * 100}%)` }}>
          {slides.map((slide, i) => (
            <div key={i} className="carousel-slide">
              <img src={slide.src} alt={slide.alt} />
              <div className="hero-carousel-overlay">
                <p className="hero-carousel-text">{slide.text}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-btn next" onClick={next} aria-label="Suivant">&#8594;</button>
        <div className="carousel-dots">
          {slides.map((_, i) => (
            <button key={i} className={`carousel-dot${i === current ? ' active' : ''}`} onClick={() => setCurrent(i)} aria-label={`Diapositive ${i+1}`} />
          ))}
        </div>
      </div>
    );
  }

  // Gallery carousel
  if (type === 'gallery') {
    return (
      <div className="carousel" style={{ background: '#f9f4eb', padding: '20px 0' }}>
        <button className="carousel-btn prev" onClick={prev} aria-label="Précédent" style={{ left: 8 }}>&#8592;</button>
        <div className="carousel-inner" style={{ transform: `translateX(-${current * 100}%)` }}>
          {slides.map((slide, i) => (
            <div key={i} className="carousel-slide">
              <img src={slide.src} alt={slide.alt} style={{ height: '280px', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
        <button className="carousel-btn next" onClick={next} aria-label="Suivant" style={{ right: 8 }}>&#8594;</button>
        <div className="carousel-dots">
          {slides.map((_, i) => (
            <button key={i} className={`carousel-dot${i === current ? ' active' : ''}`} onClick={() => setCurrent(i)} aria-label={`Image ${i+1}`} />
          ))}
        </div>
      </div>
    );
  }

  return null;
}

export default ImageCarousel;
