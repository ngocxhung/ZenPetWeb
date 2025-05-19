import React, { useState, useEffect } from 'react';

const partners = [
  { id: 1, name: 'PetCare', img: 'https://cdn-icons-png.flaticon.com/512/616/616408.png' },
  { id: 2, name: 'HappyVet', img: 'https://cdn-icons-png.flaticon.com/512/616/616408.png' },
  { id: 3, name: 'PetShop', img: 'https://cdn-icons-png.flaticon.com/512/616/616408.png' },
];

export default function PartnersSection() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 200);
  }, []);
  return (
    <section style={{padding: '32px 0', textAlign: 'center'}}>
      <h2>Đối tác của chúng tôi</h2>
      <div style={{display: 'flex', justifyContent: 'center', gap: 40, marginTop: 20}}>
        {partners.map((p, idx) => (
          <div
            key={p.id}
            style={{
              opacity: show ? 1 : 0,
              transform: show ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.7s cubic-bezier(.4,1.3,.6,1)',
              transitionDelay: `${0.1 + idx * 0.12}s`,
            }}
          >
            <img
              src={p.img}
              alt={p.name}
              style={{
                width: 60,
                marginBottom: 8,
                borderRadius: 16,
                boxShadow: '0 2px 8px #e0c08d44',
                transition: 'transform 0.25s, box-shadow 0.25s',
                cursor: 'pointer',
              }}
              onMouseOver={e => {e.currentTarget.style.transform='scale(1.15)';e.currentTarget.style.boxShadow='0 6px 24px #e0c08d99';}}
              onMouseOut={e => {e.currentTarget.style.transform='scale(1)';e.currentTarget.style.boxShadow='0 2px 8px #e0c08d44';}}
            />
            <div style={{color: '#888'}}>{p.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 