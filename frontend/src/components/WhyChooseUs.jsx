import React from 'react';
import './WhyChooseUs.css';
import { Check } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section className="choose-section container">
      <div className="choose-content">
        <p className="subtitle">Why Choose Us?</p>
        <h2>Why Choose Our School</h2>
        
        <div className="tabs">
          <button className="tab active">Our Facilities</button>
          <button className="tab">Curriculum & Learning</button>
          <button className="tab">Mission & Vision</button>
        </div>
        
        <p className="description">
          Qualified teachers who understand children's needs and focus on personal attention, through play-based and academic learning.
        </p>
        
        <div className="check-list">
          <div className="check-item">
            <Check size={18} color="#000000" />
            <span>Experienced & caring teachers</span>
          </div>
          <div className="check-item">
            <Check size={18} color="#000000" />
            <span>Safe & friendly environment</span>
          </div>
          <div className="check-item">
            <Check size={18} color="#000000" />
            <span>Modern learning methods</span>
          </div>
          <div className="check-item">
            <Check size={18} color="#000000" />
            <span>Focus on moral & social values</span>
          </div>
        </div>
        
        <div className="choose-buttons">
          <button className="btn btn-primary">Enroll Now</button>
          <button className="btn btn-secondary">Book A Visit</button>
        </div>
      </div>
      
      <div className="choose-image">
        <div className="cloud-image-wrapper">
           <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop" alt="Teacher and students" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
