import React from 'react';
import useScrollFade from '../hooks/useScrollFade';
import './PageLayout.css';

const BookVisit = () => {
  const fadeRef = useScrollFade();

  return (
    <div className="page-container container fade-in" ref={fadeRef}>
      <div className="page-content" style={{maxWidth: '700px', margin: '0 auto', paddingTop: '40px'}}>
        <h1 style={{textAlign: 'center', marginBottom: '15px'}}>Book A Visit</h1>
        <p style={{textAlign: 'center', marginBottom: '40px', color: 'var(--text-light)', fontSize: '1.2rem'}}>
          Come see our beautiful facilities and meet our caring teachers! We'd love to show you around.
        </p>
        
        <div style={{
          padding: '50px', 
          background: 'var(--bg-light)', 
          borderRadius: 'var(--radius-card)', 
          boxShadow: 'var(--shadow-soft)',
          border: 'var(--border-subtle)',
        }}>

          <form className="application-form" onSubmit={(e) => e.preventDefault()} style={{margin: '0', maxWidth: '100%'}}>
            
            <div style={{display: 'flex', gap: '20px', marginBottom: '20px', flexWrap: 'wrap'}}>
              <div className="form-group" style={{flex: '1', minWidth: '250px', margin: '0'}}>
                <label style={{display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.95rem', color: 'var(--text-dark)'}}>Parent/Guardian Name</label>
                <input type="text" placeholder="Enter your name" className="form-control" style={{width: '100%', padding: '12px 15px', border: '1px solid #E2E8F0', borderRadius: '6px', fontSize: '1rem', color: 'var(--text-dark)', boxSizing: 'border-box'}} />
              </div>
              <div className="form-group" style={{flex: '1', minWidth: '250px', margin: '0'}}>
                <label style={{display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.95rem', color: 'var(--text-dark)'}}>Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" className="form-control" style={{width: '100%', padding: '12px 15px', border: '1px solid #E2E8F0', borderRadius: '6px', fontSize: '1rem', color: 'var(--text-dark)', boxSizing: 'border-box'}} />
              </div>
            </div>

            <div className="form-group" style={{marginBottom: '20px'}}>
              <label style={{display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.95rem', color: 'var(--text-dark)'}}>Email Address</label>
              <input type="email" placeholder="Enter your email" className="form-control" style={{width: '100%', padding: '12px 15px', border: '1px solid #E2E8F0', borderRadius: '6px', fontSize: '1rem', color: 'var(--text-dark)', boxSizing: 'border-box'}} />
            </div>

            <div style={{display: 'flex', gap: '20px', marginBottom: '30px', flexWrap: 'wrap'}}>
              <div className="form-group" style={{flex: '1', minWidth: '250px', margin: '0'}}>
                <label style={{display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.95rem', color: 'var(--text-dark)'}}>Preferred Date</label>
                <input type="date" className="form-control" style={{width: '100%', padding: '12px 15px', border: '1px solid #E2E8F0', borderRadius: '6px', fontSize: '1rem', color: 'var(--text-dark)', boxSizing: 'border-box'}} />
              </div>
              <div className="form-group" style={{flex: '1', minWidth: '250px', margin: '0'}}>
                <label style={{display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.95rem', color: 'var(--text-dark)'}}>Preferred Time</label>
                <input type="time" className="form-control" style={{width: '100%', padding: '12px 15px', border: '1px solid #E2E8F0', borderRadius: '6px', fontSize: '1rem', color: 'var(--text-dark)', boxSizing: 'border-box'}} />
              </div>
            </div>
            
            <button type="submit" className="btn" style={{width: '100%', padding: '15px', fontSize: '1.1rem', justifyContent: 'center', background: 'var(--primary-color)', color: '#fff', borderRadius: '6px'}}>
              Schedule Visit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookVisit;
