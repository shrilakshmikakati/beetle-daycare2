import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import useScrollFade from '../hooks/useScrollFade';

const Hero = () => {
  const fadeRef = useScrollFade();
  return (
    <section className="hero-section fade-in" ref={fadeRef}>
      <div className="container hero-container">
        <div className="hero-content">
          <p className="subtitle" style={{ color: 'var(--secondary-color)', fontWeight: 'bold' }}>Welcome to our family.</p>
          <h1 style={{ lineHeight: '1.2' }}>A Home Away From Home For Your Little Ones</h1>
          <p className="description">
            At Beetle Daycare, we believe in creating a warm, loving, and wholesome environment where your child feels like part of our extended family. We nurture every child through play, care, and joyful learning.
          </p>
          <div className="hero-buttons">
            <Link to="/apply" className="btn btn-primary">Enroll Now <ArrowRight size={16}/></Link>
            <Link to="/book-visit" className="btn btn-secondary">Book A Visit <ArrowRight size={16}/></Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-wrapper">
             <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop" alt="Children smiling" className="student-img" />
          </div>
        </div>
      </div>
    </section>
  );



  
};

export default Hero;
