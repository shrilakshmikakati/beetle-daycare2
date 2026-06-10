import React from 'react';
import './About.css';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section className="about-section">
      <div className="container about-container">
        <div className="about-image-wrapper">
          <div className="about-shape"></div>
          <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop" alt="Teacher and students" className="about-img" />
        </div>
        <div className="about-content">
          <p className="subtitle">About Us</p>
          <h2>Inspire Growth Through Learning Daily</h2>
          <p className="description">
            We are a caring kindergarten & school dedicated to building strong foundations through play-based and academic learning.
          </p>
          <div className="about-features">
            <div className="about-feature">
              <div className="icon-badge">
                <CheckCircle size={20} color="#000000" />
              </div>
              <p>Child-Friendly Learning Environment</p>
            </div>
            <div className="about-feature">
              <div className="icon-badge">
                <CheckCircle size={20} color="#000000" />
              </div>
              <p>Focus On Child-Friendly, Safe, & Quality Education</p>
            </div>
          </div>
          <p className="description">
            At Kidzu, our aim is to give everyone a chance to learn a new language. Our skilled team creates fun and useful lessons so each student can reach their goals. We're here to help you gain skills for both work and life.
          </p>
          <div className="about-actions">
            <button className="btn btn-primary">Know More</button>
            <div className="call-us">
              <div className="phone-icon">📞</div>
              <div>
                <span>Call Us Now</span>
                <strong>+11 123 0654 98</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
