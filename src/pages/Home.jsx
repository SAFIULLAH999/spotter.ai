import React from 'react';
import Hero from '../components/Hero';
import AutonomousDispatcher from '../components/AutonomousDispatcher';
import Statistics from '../components/Statistics';
import Features from '../components/Features';
import ProductShowcase from '../components/ProductShowcase';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <AutonomousDispatcher />
      <Statistics />
      <Features />
      <ProductShowcase />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
