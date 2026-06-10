import React from 'react';
import './About.css';
import { CheckCircle } from 'lucide-react';
import useScrollFade from '../hooks/useScrollFade';

import img from '/home/shrilakshmi/.gemini/antigravity/brain/e51b60c0-e730-4330-b8e4-4a9d2154cf34/media__1781093376035.jpg';

const About = () => {
  const fadeRef = useScrollFade();

  return (
    <section className="about-section fade-in" ref={fadeRef}>
      <div className="container about-container">
        <div className="about-image-wrapper">
          <div className="about-shape"></div>
          <img src={img} alt="Cute kids playing" className="about-img" />
        </div>
        <div className="about-content">
          <h3>About Us</h3>
          <h2 style={{ lineHeight: '1.3' }}>Where Every Child is Treated Like Family</h2>
          <p className="description">
            Beetle Daycare is a home-away-from-home where children feel safe, happy, and deeply cared for. We offer a nurturing, family-like atmosphere that combines joyful play with gentle learning, helping your child grow emotionally, socially, and intellectually.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
