import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
import Programs from '../components/Programs';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Features />
      <About />
      <Programs />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
