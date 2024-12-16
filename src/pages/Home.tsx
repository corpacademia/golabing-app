import React from 'react';
import Hero from '../components/Hero';
import TrustedCompanies from '../components/TrustedCompanies';
import Features from '../components/Features';
import Technologies from '../components/Technologies';
import TechnologyVendors from '../components/TechnologyVendors';
import Solutions from '../components/Solutions';
import LabTypes from '../components/LabTypes';
import WhyChoose from '../components/WhyChoose';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

interface HomeProps {
  onGetStarted: () => void;
}

const Home: React.FC<HomeProps> = ({ onGetStarted }) => {
  return (
    <main>
      <Hero onGetStarted={onGetStarted} />
      <TrustedCompanies />
      <Features />
      <Technologies />
      <TechnologyVendors />
      <Solutions />
      <LabTypes />
      <WhyChoose />
      <Testimonials />
      <FAQ />
    </main>
  );
};

export default Home;