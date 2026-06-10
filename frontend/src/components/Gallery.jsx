import React from 'react';

import img1 from '/home/shrilakshmi/.gemini/antigravity/brain/e51b60c0-e730-4330-b8e4-4a9d2154cf34/media__1781092775129.jpg';
import img2 from '/home/shrilakshmi/.gemini/antigravity/brain/e51b60c0-e730-4330-b8e4-4a9d2154cf34/media__1781092775164.jpg';
import img3 from '/home/shrilakshmi/.gemini/antigravity/brain/e51b60c0-e730-4330-b8e4-4a9d2154cf34/media__1781092775200.jpg';
import img4 from '/home/shrilakshmi/.gemini/antigravity/brain/e51b60c0-e730-4330-b8e4-4a9d2154cf34/media__1781092775241.jpg';
import img5 from '/home/shrilakshmi/.gemini/antigravity/brain/e51b60c0-e730-4330-b8e4-4a9d2154cf34/media__1781092781420.jpg';
import img6 from '/home/shrilakshmi/.gemini/antigravity/brain/e51b60c0-e730-4330-b8e4-4a9d2154cf34/media__1781092949429.jpg';
import img7 from '/home/shrilakshmi/.gemini/antigravity/brain/e51b60c0-e730-4330-b8e4-4a9d2154cf34/media__1781093114045.jpg';
import img8 from '/home/shrilakshmi/.gemini/antigravity/brain/e51b60c0-e730-4330-b8e4-4a9d2154cf34/media__1781093114050.jpg';

const Gallery = () => {
  const images = [
    img1, img2, img3,
    img4, img5, img6,
    img7, img8
  ];

  return (
    <section className="programs-section container">
      <div className="section-header text-center">
        <h2>Our Happy Moments</h2>
        <p>A glimpse into the daily joy and warmth at Beetle Daycare.</p>
      </div>

      <div style={{ padding: '0 20px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Top large images */}
        <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
          <div style={{ flex: 1, height: '350px', borderRadius: 'var(--radius-image)', overflow: 'hidden', boxShadow: 'var(--shadow-soft)' }}>
            <img src={images[0]} alt="Gallery 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ flex: 1, height: '350px', borderRadius: 'var(--radius-image)', overflow: 'hidden', boxShadow: 'var(--shadow-soft)' }}>
            <img src={images[1]} alt="Gallery 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ flex: 1, height: '350px', borderRadius: 'var(--radius-image)', overflow: 'hidden', boxShadow: 'var(--shadow-soft)' }}>
            <img src={images[2]} alt="Gallery 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        {/* Bottom thumbnail strip */}
        <div style={{ display: 'flex', gap: '15px', overflowX: 'auto', paddingBottom: '15px' }}>
          {images.slice(3).map((img, idx) => (
            <div key={idx} style={{ flex: '0 0 auto', width: 'calc(20% - 12px)', height: '150px', borderRadius: 'var(--radius-card)', overflow: 'hidden', boxShadow: 'var(--shadow-soft)' }}>
              <img src={img} alt={`Gallery thumb ${idx}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
