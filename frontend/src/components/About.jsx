import React from 'react';
import './About.css';
import { CheckCircle } from 'lucide-react';
import useScrollFade from '../hooks/useScrollFade';

const About = () => {
  const fadeRef = useScrollFade();

  return (
    <section className="about-section fade-in" ref={fadeRef}>
      <div className="container about-container">
        <div className="about-image-wrapper">
          <div className="about-shape"></div>
          <img src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=800&auto=format&fit=crop" alt="Cute kids playing" className="about-img" />
        </div>
        <div className="about-content">
          <h3>About Us</h3>
          <h2 style={{ lineHeight: '1.3' }}>Where Every Child is Treated Like Family</h2>
          <p className="description">
            Our cozy, home-like facilities include safe play areas, bright and joyful classrooms, and warm spaces designed to make your child feel completely secure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
