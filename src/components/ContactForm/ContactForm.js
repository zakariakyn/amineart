import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm({ title }) {
  const [form, setForm] = useState({ nom: '', gmail: '', message: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Message envoyé !');
    setForm({ nom: '', gmail: '', message: '' });
  };

  return (
    <div className="contact-form-container">
      {/* Left */}
      <div className="contact-form-left">
        <h3>Venez assister à nos événements</h3>
        <p>Bienvenue chez Amine Art Events</p>
        <div className="contact-phone-card">
          <span className="phone-icon">📞</span>
          + 212 6 62 11 55 74
        </div>
      </div>

      {/* Right */}
      <div className="contact-form-right">
        <h2>{title || 'Restez en contact avec nous'}</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-row">
            <input
              type="text"
              name="nom"
              placeholder="nom"
              value={form.nom}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="gmail"
              placeholder="gmail"
              value={form.gmail}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="contact-form-submit">
            envoyez votre message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
