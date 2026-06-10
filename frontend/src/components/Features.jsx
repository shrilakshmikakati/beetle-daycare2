import React from 'react';
import { BookOpen, Users, ShieldCheck, GraduationCap } from 'lucide-react';
import './Features.css';

const Features = () => {
  const features = [
    {
      id: 1,
      title: 'Active Learning',
      icon: <BookOpen size={30} color="#000000" />,
      bgColor: '#ffffff'
    },
    {
      id: 2,
      title: 'Expert Teachers',
      icon: <Users size={30} color="#000000" />,
      bgColor: '#ffffff'
    },
    {
      id: 3,
      title: '100% Safe Campus',
      icon: <ShieldCheck size={30} color="#000000" />,
      bgColor: '#ffffff'
    },
    {
      id: 4,
      title: 'Modern Curriculum',
      icon: <GraduationCap size={30} color="#000000" />,
      bgColor: '#ffffff'
    }
  ];

  return (
    <section className="features-section container">
      <div className="features-grid">
        {features.map(feature => (
          <div 
            key={feature.id} 
            className="feature-card bouncing-element" 
            style={{ 
              backgroundColor: feature.bgColor,
              animationDelay: `${feature.id * 0.2}s`
            }}
          >
            <div className="icon-wrapper">
              {feature.icon}
            </div>
            <h3>{feature.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
