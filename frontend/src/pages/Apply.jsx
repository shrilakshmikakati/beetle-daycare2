import React from 'react';
import './PageLayout.css';

const Apply = () => {
  return (
    <div className="page-container container">
      <div className="page-content" style={{maxWidth: '700px', margin: '0 auto'}}>
        <h1 style={{textAlign: 'center', marginBottom: '15px'}}>Application Form</h1>
        <p style={{textAlign: 'center', marginBottom: '40px', color: '#555'}}>Please fill out the form below to apply for a spot at Beetle Day Care.</p>
        
        <div style={{padding: '40px', border: '1px solid #eaeaea', borderRadius: '8px', backgroundColor: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.03)'}}>
          <form className="application-form" onSubmit={(e) => e.preventDefault()} style={{margin: '0', maxWidth: '100%'}}>
            
            <div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
              <div className="form-group" style={{flex: '1', margin: '0'}}>
                <label style={{display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.9rem', color: '#333'}}>Parent/Guardian Name</label>
                <input type="text" placeholder="Enter your name" className="form-control" style={{width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '4px', boxSizing: 'border-box'}} />
              </div>
              <div className="form-group" style={{flex: '1', margin: '0'}}>
                <label style={{display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.9rem', color: '#333'}}>Child's Name</label>
                <input type="text" placeholder="Enter child's name" className="form-control" style={{width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '4px', boxSizing: 'border-box'}} />
              </div>
            </div>

            <div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
              <div className="form-group" style={{flex: '1', margin: '0'}}>
                <label style={{display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.9rem', color: '#333'}}>Email Address</label>
                <input type="email" placeholder="Enter your email" className="form-control" style={{width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '4px', boxSizing: 'border-box'}} />
              </div>
              <div className="form-group" style={{flex: '1', margin: '0'}}>
                <label style={{display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.9rem', color: '#333'}}>Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" className="form-control" style={{width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '4px', boxSizing: 'border-box'}} />
              </div>
            </div>

            <div className="form-group" style={{marginBottom: '30px'}}>
              <label style={{display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.9rem', color: '#333'}}>Select Program</label>
              <select className="form-control" style={{width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '4px', boxSizing: 'border-box', backgroundColor: '#fff'}}>
                <option>Infant Care (0-2 Years)</option>
                <option>Toddler Care (3-5 Years)</option>
                <option>Nursery Program (7-10 Years)</option>
                <option>Kindergarten (10-12 Years)</option>
              </select>
            </div>
            
            <button type="submit" className="btn btn-primary" style={{width: '100%', padding: '15px', fontSize: '1.1rem', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', transition: 'background-color 0.3s'}}>Submit Application</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Apply;
