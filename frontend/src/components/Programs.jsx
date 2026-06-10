import React from 'react';
import './Programs.css';
import { ArrowRight } from 'lucide-react';

import img1 from '/home/shrilakshmi/.gemini/antigravity/brain/e51b60c0-e730-4330-b8e4-4a9d2154cf34/media__1781092949482.jpg';
import img2 from '/home/shrilakshmi/.gemini/antigravity/brain/e51b60c0-e730-4330-b8e4-4a9d2154cf34/media__1781092957356.jpg';
import img3 from '/home/shrilakshmi/.gemini/antigravity/brain/e51b60c0-e730-4330-b8e4-4a9d2154cf34/media__1781092775129.jpg';

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: 'Play Group Program',
      age: '3-5 Years',
      desc: 'Fun-based learning through games, music, and activities to develop social skills and confidence.',
      duration: '2.5 Hr',
      bgColor: '#ffffff',
      img: img1
    },
    {
      id: 2,
      title: 'Nursery Program',
      age: '7-10 Years',
      desc: 'Fun-based learning through games, music, and activities to develop social skills and confidence.',
      duration: '2.5 Hr',
      bgColor: '#ffffff',
      img: img2
    },
    {
      id: 3,
      title: 'Kindergarten (KG) Program',
      age: '10-12 Years',
      desc: 'Fun-based learning through games, music, and activities to develop social skills and confidence.',
      duration: '2.5 Hr',
      bgColor: '#ffffff',
      img: img3
    }
  ];

  return (
    <section className="programs-section container">
      <div className="section-header text-center">
        <h2>Our Programs</h2>
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
