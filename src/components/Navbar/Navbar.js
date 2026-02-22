import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileEvenementsOpen, setMobileEvenementsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileEvenementsOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span className="navbar-logo-icon">❧</span>
          AMINE ART EVENTS
        </Link>

        {/* Desktop links */}
        <ul className="navbar-links">
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')} end>
              Accueil
            </NavLink>
          </li>
          <li className="nav-item">
            <span className="nav-link">Événements</span>
            <div className="dropdown-menu">
              <Link to="/evenements/soiree">Soirée</Link>
              <Link to="/evenements/mariage">Mariage</Link>
            </div>
          </li>
          <li className="nav-item">
            <span className="nav-link">Services</span>
            <div className="dropdown-menu">
              <Link to="/services/eclairage">Éclairage</Link>
              <Link to="/services/structure">Structure</Link>
              <Link to="/services/sonorisation">Sonorisation</Link>
              <Link to="/services/decoration">Décoration</Link>
            </div>
          </li>
          <li className="nav-item">
            <NavLink to="/temoignages" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
              Témoignages
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contactez-nous" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
              Contactez-nous
            </NavLink>
          </li>
        </ul>

        {/* Hamburger */}
        <button className="navbar-hamburger" onClick={() => setMobileOpen(true)} aria-label="Ouvrir le menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile overlay */}
      <div className={`mobile-overlay${mobileOpen ? ' open' : ''}`}>
        <div className="mobile-overlay-header">
          <Link to="/" className="navbar-logo" onClick={closeMobile}>
            <span className="navbar-logo-icon">❧</span>
            AMINE ART EVENTS
          </Link>
          <button className="mobile-close-btn" onClick={closeMobile} aria-label="Fermer le menu">✕</button>
        </div>

        <ul className="mobile-nav-links">
          <li><Link to="/" onClick={closeMobile}>Accueil</Link></li>
          <li>
            <span onClick={() => setMobileEvenementsOpen(!mobileEvenementsOpen)}>
              Événements {mobileEvenementsOpen ? '▲' : '▼'}
            </span>
            {mobileEvenementsOpen && (
              <ul className="mobile-sub-links">
                <li><Link to="/evenements/soiree" onClick={closeMobile}>Soirée</Link></li>
                <li><Link to="/evenements/mariage" onClick={closeMobile}>Mariage</Link></li>
              </ul>
            )}
          </li>
          <li>
            <span onClick={() => setMobileServicesOpen(!mobileServicesOpen)}>
              Services {mobileServicesOpen ? '▲' : '▼'}
            </span>
            {mobileServicesOpen && (
              <ul className="mobile-sub-links">
                <li><Link to="/services/eclairage" onClick={closeMobile}>Éclairage</Link></li>
                <li><Link to="/services/structure" onClick={closeMobile}>Structure</Link></li>
                <li><Link to="/services/sonorisation" onClick={closeMobile}>Sonorisation</Link></li>
                <li><Link to="/services/decoration" onClick={closeMobile}>Décoration</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/temoignages" onClick={closeMobile}>Témoignages</Link></li>
          <li><Link to="/contactez-nous" onClick={closeMobile}>Contactez-nous</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
