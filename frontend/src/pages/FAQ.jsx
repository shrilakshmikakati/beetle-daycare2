import React, { useState } from 'react';
import useScrollFade from '../hooks/useScrollFade';
import { Plus, Minus, Send } from 'lucide-react';
import './PageLayout.css';

const FAQ = () => {
  const fadeRef = useScrollFade();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { q: "What are your operating hours?", a: "We are open Monday through Friday from 7:00 AM to 5:00 PM." },
    { q: "Do you provide meals?", a: "Yes, we provide nutritious snacks and a healthy lunch prepared daily." },
    { q: "What is your teacher to child ratio?", a: "We maintain a low ratio to ensure personalized attention and safety for every child." },
    { q: "Do you offer child care counselling?", a: "Yes, our experienced day care personnel offer guidance and counselling for your child care needs." }
  ];

  return (
    <div className="page-container container fade-in" ref={fadeRef}>
      <div className="page-content" style={{maxWidth: '1000px', margin: '0 auto', paddingTop: '40px'}}>
        <h1 style={{textAlign: 'center', marginBottom: '10px'}}>Frequently Asked Questions</h1>
        <p className="welcome-text" style={{textAlign: 'center', marginBottom: '50px', color: 'var(--text-light)', fontSize: '1.2rem'}}>
          Everything you need to know about our daycare programs.
        </p>
        
        <div style={{display: 'flex', gap: '50px', flexWrap: 'wrap'}}>
          {/* FAQ Accordion Column */}
          <div style={{flex: '1', minWidth: '320px'}}>
            <h2 style={{fontSize: '1.8rem', marginBottom: '25px', color: 'var(--primary-color)'}}>Common Questions</h2>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  style={{
                    borderBottom: 'var(--border-subtle)',
                    padding: '20px 0',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                >
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <h3 style={{fontSize: '1.1rem', margin: 0, color: openIndex === index ? 'var(--primary-color)' : 'var(--text-dark)', fontWeight: '600'}}>{faq.q}</h3>
                    {openIndex === index ? <Minus size={20} color="var(--primary-color)"/> : <Plus size={20} color="var(--text-light)"/>}
                  </div>
                  <div style={{
                    maxHeight: openIndex === index ? '200px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease'
                  }}>
                    <p style={{marginTop: '15px', color: 'var(--text-light)', lineHeight: '1.6'}}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Get In Touch Column */}
          <div className="contact-form-section" style={{
            flex: '1', minWidth: '320px', padding: '40px', 
            background: 'var(--bg-light)', 
            borderRadius: 'var(--radius-card)', 
            boxShadow: 'var(--shadow-soft)',
            border: 'var(--border-subtle)'
          }}>
            <h2 style={{fontSize: '1.8rem', marginBottom: '15px', color: 'var(--primary-color)'}}>Get In Touch</h2>
            <p style={{marginBottom: '25px', fontSize: '1rem', color: 'var(--text-light)'}}>Have a specific question? Send us a message and we'll get back to you shortly.</p>
            <form className="application-form" onSubmit={(e) => e.preventDefault()} style={{marginTop: '0', maxWidth: '100%'}}>
              <div className="form-group" style={{marginBottom: '20px'}}>
                <input type="text" placeholder="Your Name" className="form-control" style={{width: '100%', padding: '12px 15px', border: '1px solid #E2E8F0', borderRadius: '6px', fontSize: '1rem', color: 'var(--text-dark)'}} />
              </div>
              <div className="form-group" style={{marginBottom: '20px'}}>
                <input type="email" placeholder="Your Email" className="form-control" style={{width: '100%', padding: '12px 15px', border: '1px solid #E2E8F0', borderRadius: '6px', fontSize: '1rem', color: 'var(--text-dark)'}} />
              </div>
              <div className="form-group" style={{marginBottom: '25px'}}>
                <textarea placeholder="How can we help you?" className="form-control" rows="4" style={{width: '100%', padding: '12px 15px', border: '1px solid #E2E8F0', borderRadius: '6px', fontFamily: 'inherit', resize: 'vertical', fontSize: '1rem', color: 'var(--text-dark)'}}></textarea>
              </div>
              <button type="submit" className="btn" style={{width: '100%', padding: '12px 15px', fontSize: '1.1rem', justifyContent: 'center', background: 'var(--primary-color)', color: '#fff', borderRadius: '6px'}}>
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
