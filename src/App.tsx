import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/company/AboutUs';
import Blog from './pages/company/Blog';
import Careers from './pages/company/Careers';
import Partners from './pages/company/Partners';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfService from './pages/legal/TermsOfService';
import CookiePolicy from './pages/legal/CookiePolicy';

function App() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Navbar onContactClick={() => setIsContactFormOpen(true)} />
        <Routes>
          <Route path="/" element={<Home onGetStarted={() => setIsContactFormOpen(true)} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
        <Footer onContactClick={() => setIsContactFormOpen(true)} />
        <ContactForm 
          isOpen={isContactFormOpen} 
          onClose={() => setIsContactFormOpen(false)} 
        />
      </div>
    </Router>
  );
}

export default App;