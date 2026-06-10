import React from 'react';
import useScrollFade from '../hooks/useScrollFade';
import { Package, Droplet, Coffee, Utensils, CupSoda, Footprints, Shirt, Bed, Baby, Heart, Camera } from 'lucide-react';
import './PageLayout.css';

const supplies = [
  { icon: <Package size={32} color="var(--primary-color)" />, name: 'Diapers', desc: 'Most parents bring one large package at a time. We store them and let you know when we need more.', color: 'var(--bg-light)' },
  { icon: <Droplet size={32} color="var(--secondary-color)" />, name: 'Wipes', desc: 'A package of wipes lasts about two weeks. We can store large packages.', color: 'var(--bg-light)' },
  { icon: <Coffee size={32} color="var(--primary-color)" />, name: 'Bottles', desc: 'Please supply 4-5 pre-made bottles each day. Unused ones go home daily to be washed.', color: 'var(--bg-light)' },
  { icon: <Utensils size={32} color="var(--secondary-color)" />, name: 'Formula/Food', desc: 'We need extra formula/milk for emergencies. Parents prepare food for kids under 1 year.', color: 'var(--bg-light)' },
  { icon: <CupSoda size={32} color="var(--primary-color)" />, name: 'Cups', desc: 'Once your baby uses a "sippy" cup, please send three each day.', color: 'var(--bg-light)' },
  { icon: <Footprints size={32} color="var(--secondary-color)" />, name: 'Shoes', desc: 'Please bring indoor shoes and socks for your baby every day.', color: 'var(--bg-light)' },
  { icon: <Shirt size={32} color="var(--primary-color)" />, name: 'Clothes & Bibs', desc: 'Two extra outfits for unforeseen messiness! Bibs are great for drooling.', color: 'var(--bg-light)' },
  { icon: <Bed size={32} color="var(--secondary-color)" />, name: 'Blanket', desc: 'Provide sheets for your baby\'s crib. Please launder them at the end of each week.', color: 'var(--bg-light)' },
  { icon: <Baby size={32} color="var(--primary-color)" />, name: 'Pacifier', desc: 'One is fine, but two are better! We keep at least one labeled pacifier in class.', color: 'var(--bg-light)' },
  { icon: <Heart size={32} color="var(--secondary-color)" />, name: 'Diaper Cream', desc: 'OTC or prescription cream (with medication form) is welcome.', color: 'var(--bg-light)' },
  { icon: <Camera size={32} color="var(--primary-color)" />, name: 'Baby Photo', desc: 'Please bring one baby or family photo for us to display in our class room!', color: 'var(--bg-light)' }
];

const LetterToParents = () => {
  const fadeRef = useScrollFade();

  return (
    <div className="page-container container fade-in" ref={fadeRef}>
      <div className="page-content" style={{maxWidth: '1200px', margin: '0 auto', paddingTop: '40px'}}>
        <h1 style={{textAlign: 'center', marginBottom: '10px'}}>Letter to Parents</h1>
        <p style={{textAlign: 'center', fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: '50px'}}>
          Dear Parents, Welcome to the <strong>Beetle Babies!</strong>
        </p>
        
        <div style={{
          textAlign: 'center', marginBottom: '40px', background: 'var(--bg-light)', padding: '30px', 
          borderRadius: 'var(--radius-card)', border: 'var(--border-subtle)'
        }}>
          <p style={{fontSize: '1.1rem', color: 'var(--text-dark)', fontWeight: '500', margin: 0}}>
            To help make the transition from home to child care easier, here is a list of supplies your baby will need:
          </p>
        </div>

        <div style={{ background: 'var(--bg-light)', borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-soft)', border: 'var(--border-subtle)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                <th style={{ padding: '20px', fontWeight: '700', color: 'var(--text-dark)', width: '80px', textAlign: 'center' }}>Icon</th>
                <th style={{ padding: '20px', fontWeight: '700', color: 'var(--text-dark)', width: '250px' }}>Item Requirement</th>
                <th style={{ padding: '20px', fontWeight: '700', color: 'var(--text-dark)' }}>Description & Instructions</th>
              </tr>
            </thead>
            <tbody>
              {supplies.map((item, index) => (
                <tr key={index} style={{ borderBottom: index === supplies.length - 1 ? 'none' : '1px solid #e2e8f0' }}>
                  <td style={{ padding: '20px', verticalAlign: 'middle', textAlign: 'center' }}>
                    <div style={{ display: 'inline-flex', padding: '10px', background: '#f1f5f9', borderRadius: '50%' }}>
                      {item.icon}
                    </div>
                  </td>
                  <td style={{ padding: '20px', fontWeight: '700', fontSize: '1.1rem', color: 'var(--primary-color)', verticalAlign: 'middle' }}>{item.name}</td>
                  <td style={{ padding: '20px', color: 'var(--text-dark)', lineHeight: '1.6', verticalAlign: 'middle' }}>{item.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LetterToParents;
