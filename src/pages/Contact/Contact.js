import React from 'react';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import ContactForm from '../../components/ContactForm/ContactForm';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <HeroBanner title="Contactez-nous" />
      <div className="contact-page-content">
        <ContactForm title="Restez en contact avec nous" />
      </div>
    </div>
  );
}

export default Contact;
