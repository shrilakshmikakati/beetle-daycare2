import React from 'react';
import './PageLayout.css';

const Tuition = () => {
  return (
    <div className="page-container container">
      <div className="page-content" style={{maxWidth: '800px', margin: '0 auto'}}>
        <h1 style={{textAlign: 'center', marginBottom: '40px'}}>Tuition Rates</h1>
        
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px', marginBottom: '30px'}}>
          <div style={{width: '100%', maxWidth: '500px', padding: '40px', border: '1px solid #eaeaea', borderRadius: '8px', backgroundColor: '#fff', textAlign: 'center'}}>
            <h2 style={{fontSize: '1.5rem', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px'}}>Daycare Rates</h2>
            <div style={{fontSize: '3rem', fontWeight: 'bold', marginBottom: '10px'}}>$45<span style={{fontSize: '1rem', fontWeight: 'normal', color: '#555'}}>/day</span></div>
            
            <div style={{borderTop: '1px solid #eaeaea', margin: '20px 0'}}></div>
            
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '15px', fontSize: '1.1rem'}}>
              <span style={{color: '#555'}}>Late Pick-up Fee:</span>
              <strong>$10 / hr</strong>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem'}}>
              <span style={{color: '#555'}}>Daycare Hours:</span>
              <strong>7:00 AM – 5:00 PM</strong>
            </div>
            
            <div style={{marginTop: '30px', padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '4px', fontSize: '0.9rem', color: '#555'}}>
              * Please note that the daycare is not available on a part-time basis.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tuition;
