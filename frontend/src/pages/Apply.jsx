import React from 'react';
import useScrollFade from '../hooks/useScrollFade';
import './PageLayout.css';

const Apply = () => {
  const fadeRef = useScrollFade();

  return (
    <div className="page-container container fade-in" ref={fadeRef}>
      <div className="page-content" style={{maxWidth: '700px', margin: '0 auto', paddingTop: '40px'}}>
        <h1 style={{textAlign: 'center', marginBottom: '15px'}}>Application Form</h1>
        <p style={{textAlign: 'center', marginBottom: '40px', color: 'var(--text-light)', fontSize: '1.2rem'}}>
          We're excited to welcome you to the <strong>Beetle Daycare</strong> family.
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
                <label style={{display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.95rem', color: 'var(--text-dark)'}}>Child's Name</label>
                <input type="text" placeholder="Enter child's name" className="form-control" style={{width: '100%', padding: '12px 15px', border: '1px solid #E2E8F0', borderRadius: '6px', fontSize: '1rem', color: 'var(--text-dark)', boxSizing: 'border-box'}} />
              </div>
            </div>

            <div style={{display: 'flex', gap: '20px', marginBottom: '20px', flexWrap: 'wrap'}}>
              <div className="form-group" style={{flex: '1', minWidth: '250px', margin: '0'}}>
                <label style={{display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.95rem', color: 'var(--text-dark)'}}>Email Address</label>
                <input type="email" placeholder="Enter your email" className="form-control" style={{width: '100%', padding: '12px 15px', border: '1px solid #E2E8F0', borderRadius: '6px', fontSize: '1rem', color: 'var(--text-dark)', boxSizing: 'border-box'}} />
              </div>
              <div className="form-group" style={{flex: '1', minWidth: '250px', margin: '0'}}>
                <label style={{display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.95rem', color: 'var(--text-dark)'}}>Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" className="form-control" style={{width: '100%', padding: '12px 15px', border: '1px solid #E2E8F0', borderRadius: '6px', fontSize: '1rem', color: 'var(--text-dark)', boxSizing: 'border-box'}} />
              </div>
            </div>

            <div className="form-group" style={{marginBottom: '30px'}}>
              <label style={{display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.95rem', color: 'var(--text-dark)'}}>Select Program</label>
              <select className="form-control" style={{width: '100%', padding: '12px 15px', border: '1px solid #E2E8F0', borderRadius: '6px', boxSizing: 'border-box', backgroundColor: '#fff', fontSize: '1rem', color: 'var(--text-dark)', cursor: 'pointer'}}>
                <option>Infant Care (0-2 Years)</option>
                <option>Toddler Care (3-5 Years)</option>
                <option>Nursery Program (7-10 Years)</option>
                <option>Kindergarten (10-12 Years)</option>
              </select>
            </div>
            
            <button type="submit" className="btn" style={{width: '100%', padding: '15px', fontSize: '1.1rem', justifyContent: 'center', background: 'var(--primary-color)', color: '#fff', borderRadius: '6px'}}>
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Apply;
