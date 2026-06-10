import React from 'react';

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop", // Painting/drawing
    "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=800&auto=format&fit=crop", // Running in forest
    "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop", // Toddler with camera
    "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?q=80&w=800&auto=format&fit=crop", // Boy smiling
    "https://images.unsplash.com/photo-1546795708-c962dc089798?q=80&w=800&auto=format&fit=crop", // Playing child
    "https://images.unsplash.com/photo-1518554372478-7ab26b40390d?q=80&w=800&auto=format&fit=crop", // Running field
    "https://images.unsplash.com/photo-1616707424144-03c58bbba79f?q=80&w=800&auto=format&fit=crop", // Child play
    "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?q=80&w=800&auto=format&fit=crop"  // Kid smiling
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
