import React from 'react';

const partners = [
  { id: 1, name: 'PetCare', img: 'https://cdn-icons-png.flaticon.com/512/616/616408.png' },
  { id: 2, name: 'HappyVet', img: 'https://cdn-icons-png.flaticon.com/512/616/616408.png' },
  { id: 3, name: 'PetShop', img: 'https://cdn-icons-png.flaticon.com/512/616/616408.png' },
];

export default function PartnersSection() {
  return (
    <section style={{padding: '32px 0', textAlign: 'center'}}>
      <h2>Đối tác của chúng tôi</h2>
      <div style={{display: 'flex', justifyContent: 'center', gap: 40, marginTop: 20}}>
        {partners.map(p => (
          <div key={p.id}>
            <img src={p.img} alt={p.name} style={{width: 60, marginBottom: 8}} />
            <div style={{color: '#888'}}>{p.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 