import React from 'react';
import './Programs.css';
import { ArrowRight } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: 'Play Group Program',
      age: '3-5 Years',
      desc: 'Fun-based learning through games, music, and activities to develop social skills and confidence.',
      duration: '2.5 Hr',
      bgColor: '#ffffff',
      img: 'https://images.unsplash.com/photo-1545622783-b3e0214ee60d?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Nursery Program',
      age: '7-10 Years',
      desc: 'Fun-based learning through games, music, and activities to develop social skills and confidence.',
      duration: '2.5 Hr',
      bgColor: '#ffffff',
      img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Kindergarten (KG) Program',
      age: '10-12 Years',
      desc: 'Fun-based learning through games, music, and activities to develop social skills and confidence.',
      duration: '2.5 Hr',
      bgColor: '#ffffff',
      img: 'https://images.unsplash.com/photo-1503945438517-f65904a52ce6?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <section className="programs-section container">
      <div className="section-header text-center">
        <h2>Our Programs </h2>
      </div>
      
      <div className="programs-grid">
        {programs.map(prog => (
          <div key={prog.id} className="program-card" style={{ backgroundColor: prog.bgColor }}>
            <div className="program-img-wrapper">
              <img src={prog.img} alt={prog.title} />
            </div>
            <div className="age-badge">{prog.age}</div>
            <h3>{prog.title}</h3>
            <p className="program-desc">{prog.desc}</p>
            <div className="duration">Duration : {prog.duration}</div>
            <button className="read-more-btn"><ArrowRight size={18} /></button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
