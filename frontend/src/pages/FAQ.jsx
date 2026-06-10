import React from 'react';
import './PageLayout.css';

const FAQ = () => {
  return (
    <div className="page-container container">
      <div className="page-content" style={{maxWidth: '900px', margin: '0 auto'}}>
        <h1 style={{textAlign: 'center', marginBottom: '10px'}}>Frequently Asked Questions</h1>
        <p className="welcome-text" style={{textAlign: 'center', marginBottom: '40px', color: '#555'}}>Welcome to the <strong>home of happy, healthy kids!</strong></p>
        
        <div style={{display: 'flex', gap: '40px', flexWrap: 'wrap'}}>
          {/* FAQ Info Column */}
          <div style={{flex: '1', minWidth: '300px'}}>
            <h2 style={{fontSize: '1.5rem', marginBottom: '20px', borderBottom: '2px solid #000', paddingBottom: '10px', display: 'inline-block'}}>Our Information</h2>
            <p style={{marginBottom: '20px', lineHeight: '1.6'}}>We provide the following information concerning your child care needs:</p>
            <ul style={{listStyleType: 'none', padding: '0', margin: '0'}}>
              <li style={{marginBottom: '15px', padding: '15px', borderLeft: '4px solid #000', backgroundColor: '#f9f9f9'}}>Answers to <strong>FAQ</strong></li>
              <li style={{marginBottom: '15px', padding: '15px', borderLeft: '4px solid #000', backgroundColor: '#f9f9f9'}}>Information on our Website link pages</li>
              <li style={{marginBottom: '15px', padding: '15px', borderLeft: '4px solid #000', backgroundColor: '#f9f9f9'}}>Child care counselling by our experienced day care personnel</li>
            </ul>
          </div>
          
          {/* Get In Touch Column */}
          <div className="contact-form-section" style={{flex: '1', minWidth: '300px', padding: '30px', border: '1px solid #eaeaea', borderRadius: '8px', backgroundColor: '#fff'}}>
            <h2 style={{fontSize: '1.5rem', marginBottom: '20px'}}>Get In Touch</h2>
            <p style={{marginBottom: '20px', fontSize: '0.9rem', color: '#666'}}>Have a specific question? Send us a message and we'll get back to you shortly.</p>
            <form className="application-form" onSubmit={(e) => e.preventDefault()} style={{marginTop: '0', maxWidth: '100%'}}>
              <div className="form-group" style={{marginBottom: '15px'}}>
                <input type="text" placeholder="Your Name" className="form-control" style={{width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', boxSizing: 'border-box'}} />
              </div>
              <div className="form-group" style={{marginBottom: '15px'}}>
                <input type="email" placeholder="Your Email" className="form-control" style={{width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', boxSizing: 'border-box'}} />
              </div>
              <div className="form-group" style={{marginBottom: '15px'}}>
                <textarea placeholder="How can we help you?" className="form-control" rows="4" style={{width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', boxSizing: 'border-box', fontFamily: 'inherit'}}></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{width: '100%', padding: '12px', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};



export default FAQ;
