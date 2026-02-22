import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Soiree from './pages/Soiree/Soiree';
import Mariage from './pages/Mariage/Mariage';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail';
import Testimonials from './pages/Testimonials/Testimonials';
import Contact from './pages/Contact/Contact';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/evenements/soiree" element={<Soiree />} />
          <Route path="/evenements/mariage" element={<Mariage />} />
          <Route path="/services/eclairage" element={<ServiceDetail service="eclairage" />} />
          <Route path="/services/structure" element={<ServiceDetail service="structure" />} />
          <Route path="/services/sonorisation" element={<ServiceDetail service="sonorisation" />} />
          <Route path="/services/decoration" element={<ServiceDetail service="decoration" />} />
          <Route path="/temoignages" element={<Testimonials />} />
          <Route path="/contactez-nous" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
