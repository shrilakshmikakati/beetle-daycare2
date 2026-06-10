import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="subtitle">A safe, joyful learning environment.</p>
          <h1>Nurturing Young Minds For A Bright Future</h1>
          <p className="description">
            We are a caring kindergarten & school dedicated to building strong foundations through play-based and academic learning.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Enroll Now <ArrowRight size={16}/></button>
            <button className="btn btn-secondary">Book A Visit <ArrowRight size={16}/></button>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-wrapper">
             <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop" alt="Happy Student" className="student-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
