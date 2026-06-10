import React from 'react';
import './PageLayout.css';

const Hours = () => {
  return (
    <div className="page-container container">
      <div className="page-content" style={{maxWidth: '800px', margin: '0 auto'}}>
        <h1 style={{textAlign: 'center', marginBottom: '10px'}}>Hours of Opening & Holidays</h1>
        <p className="welcome-text" style={{textAlign: 'center', marginBottom: '40px'}}>Welcome to the <strong>home of happy, healthy kids!</strong></p>
        
        <div style={{display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '30px'}}>
          <div style={{flex: '1', minWidth: '300px', padding: '30px', border: '1px solid #eaeaea', borderRadius: '8px', backgroundColor: '#fff', textAlign: 'center'}}>
            <h2 style={{fontSize: '1.5rem', marginBottom: '15px'}}>Operating Hours</h2>
            <p style={{fontSize: '1.2rem', fontWeight: 'bold'}}>7:00 AM – 5:00 PM</p>
            <p style={{color: '#555'}}>Monday through Friday</p>
            <p style={{marginTop: '20px', fontSize: '0.9rem', color: '#888'}}>* We may be closed due to snow, health, or other emergencies.</p>
          </div>
          
          <div style={{flex: '1', minWidth: '300px', padding: '30px', border: '1px solid #eaeaea', borderRadius: '8px', backgroundColor: '#fff'}}>
            <h2 style={{fontSize: '1.5rem', marginBottom: '15px', textAlign: 'center'}}>Observed Holidays</h2>
            <ul style={{listStyleType: 'none', margin: '0', padding: '0', textAlign: 'center', lineHeight: '1.8'}}>
              <li>New Year's Day</li>
              <li>President's Day</li>
              <li>Labor Day</li>
              <li>July 4th</li>
              <li>Martin Luther King Day</li>
              <li>Memorial Day</li>
              <li>Thanksgiving Day</li>
              <li>Christmas Day</li>
              <li>New Year's Eve</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hours;
