import React from 'react';
import useScrollFade from '../hooks/useScrollFade';
import { Clock, Calendar } from 'lucide-react';
import './PageLayout.css';

const Hours = () => {
  const fadeRef = useScrollFade();

  return (
    <div className="page-container container fade-in" ref={fadeRef}>
      <div className="page-content" style={{maxWidth: '900px', margin: '0 auto', paddingTop: '40px'}}>
        <h1 style={{textAlign: 'center', marginBottom: '10px'}}>Hours & Schedule</h1>
        <p className="welcome-text" style={{textAlign: 'center', marginBottom: '50px', fontSize: '1.2rem', color: 'var(--text-light)'}}>
          Reliable scheduling to support your family's routine.
        </p>
        
        <div style={{display: 'flex', gap: '40px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '50px'}}>
          
          <div style={{
            flex: '1', minWidth: '320px', padding: '40px', 
            background: 'var(--bg-light)', 
            borderRadius: 'var(--radius-card)',
            boxShadow: 'var(--shadow-soft)',
            border: 'var(--border-subtle)'
          }}>
            <div style={{display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px'}}>
              <Clock size={32} color="var(--primary-color)" />
              <h2 style={{fontSize: '1.8rem', color: 'var(--primary-color)', margin: 0}}>Operating Hours</h2>
            </div>
            
            <div style={{padding: '20px', background: 'var(--background-color)', borderRadius: '8px', borderLeft: '4px solid var(--primary-color)', marginBottom: '20px'}}>
              <p style={{fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-dark)', margin: 0}}>7:00 AM – 5:00 PM</p>
              <p style={{color: 'var(--text-light)', margin: '5px 0 0 0', fontSize: '1.1rem', fontWeight: '500'}}>Monday through Friday</p>
            </div>
            <p style={{marginTop: '20px', fontSize: '0.9rem', color: 'var(--text-light)', fontStyle: 'italic', lineHeight: '1.6'}}>
              * Please note: We may be closed due to severe weather, health directives, or other unforeseen emergencies. Parents will be notified promptly.
            </p>
          </div>
          
          <div style={{
            flex: '1', minWidth: '320px', padding: '40px', 
            background: 'var(--bg-light)', 
            borderRadius: 'var(--radius-card)',
            boxShadow: 'var(--shadow-soft)',
            border: 'var(--border-subtle)'
          }}>
            <div style={{display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px'}}>
              <Calendar size={32} color="var(--secondary-color)" />
              <h2 style={{fontSize: '1.8rem', color: 'var(--primary-color)', margin: 0}}>Observed Holidays</h2>
            </div>
            
            <ul style={{
              listStyleType: 'none', margin: '0', padding: '0', lineHeight: '2.2', fontWeight: '500', color: 'var(--text-dark)',
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'
            }}>
              <li style={{borderBottom: '1px solid #f1f5f9', paddingBottom: '5px'}}>New Year's Day</li>
              <li style={{borderBottom: '1px solid #f1f5f9', paddingBottom: '5px'}}>President's Day</li>
              <li style={{borderBottom: '1px solid #f1f5f9', paddingBottom: '5px'}}>Labor Day</li>
              <li style={{borderBottom: '1px solid #f1f5f9', paddingBottom: '5px'}}>July 4th</li>
              <li style={{borderBottom: '1px solid #f1f5f9', paddingBottom: '5px'}}>MLK Jr. Day</li>
              <li style={{borderBottom: '1px solid #f1f5f9', paddingBottom: '5px'}}>Memorial Day</li>
              <li style={{borderBottom: '1px solid #f1f5f9', paddingBottom: '5px'}}>Thanksgiving</li>
              <li style={{borderBottom: '1px solid #f1f5f9', paddingBottom: '5px'}}>Christmas Day</li>
              <li style={{borderBottom: '1px solid #f1f5f9', paddingBottom: '5px'}}>New Year's Eve</li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hours;
