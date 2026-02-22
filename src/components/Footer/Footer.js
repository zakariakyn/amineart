import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Social icons */}
        <div className="footer-social">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
            Instagram
          </a>
          <a href="https://wa.me/212662115574" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <i className="fab fa-whatsapp"></i>
            WhatsApp
          </a>
        </div>

        {/* Nav links */}
        <nav className="footer-nav">
          <Link to="/">Accueil</Link>
          <span className="separator"> | </span>
          <Link to="/evenements/soiree">Événements</Link>
          <span className="separator"> | </span>
          <Link to="/services/eclairage">Services</Link>
          <span className="separator"> | </span>
          <Link to="/temoignages">Témoignage</Link>
          <span className="separator"> | </span>
          <Link to="/contactez-nous">Contactez-nous</Link>
        </nav>

        <p className="footer-copyright">
          Copyright © amine art events 2026
        </p>
      </div>
    </footer>
  );
}

export default Footer;
