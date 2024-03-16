import React from 'react';

function AboutUsContainer({img,title,desc}) {
  return (
    <div style={{ backgroundColor: '#f5f5f5', width:'350px', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
      <img src={img} alt="Profile" style={{ borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover', marginBottom: '20px' }} />
      <h2 style={{ color: '#333', marginBottom: '10px' }}>{title}</h2>
      <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.5' }}>
        {desc}
      </p>
    </div>
  );
}

export default AboutUsContainer;
