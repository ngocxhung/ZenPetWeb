import React, { useState, useEffect } from 'react';

const products = [
  {
    id: 1,
    name: 'Vòng định vị GPS ZenPet S1',
    desc: 'Định vị thời gian thực, chống nước, pin 7 ngày.',
    price: '1.200.000đ',
    img: 'https://media.istockphoto.com/id/1322277512/vector/smart-pet-collar-landscape-poster-dog-tech-gadgets-gps-trackers-for-dogs.jpg?s=612x612&w=0&k=20&c=6Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw='
  },
  {
    id: 2,
    name: 'Vòng định vị GPS ZenPet Mini',
    desc: 'Nhỏ gọn cho thú cưng dưới 10kg, cảnh báo rời vùng an toàn.',
    price: '1.050.000đ',
    img: 'https://media.istockphoto.com/id/1322277512/vector/gps-control-tracker-for-walking-cat-and-dog-pet-tracking-application-smartphone-with-city.jpg?s=612x612&w=0&k=20&c=6Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw='
  },
  {
    id: 3,
    name: 'Vòng định vị GPS ZenPet Pro',
    desc: 'Pin 15 ngày, tích hợp cảm biến sức khỏe, app quản lý.',
    price: '1.650.000đ',
    img: 'https://media.istockphoto.com/id/1322277512/vector/gps-for-dogs-man-with-smartphone-monitors-geolocation-of-domestic-animal.jpg?s=612x612&w=0&k=20&c=6Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw='
  }
];

export default function FeaturedProductsSection() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 200);
  }, []);
  return (
    <section style={{padding: '40px 0'}}>
      <h2 style={{textAlign: 'center', color: '#7c4a03'}}>Vòng định vị nổi bật</h2>
      <div style={{display: 'flex', justifyContent: 'center', gap: 32, marginTop: 24, flexWrap: 'wrap'}}>
        {products.map((p, idx) => (
          <div
            key={p.id}
            style={{
              background: '#fff7e6',
              borderRadius: 16,
              boxShadow: show ? '0 4px 24px #e0c08d55' : '0 2px 12px #e0c08d22',
              padding: 24,
              width: 260,
              textAlign: 'center',
              border: '2px solid #e0c08d',
              transform: show ? 'scale(1)' : 'scale(0.95)',
              opacity: show ? 1 : 0,
              transition: 'all 0.7s cubic-bezier(.4,1.3,.6,1)',
              transitionDelay: `${0.1 + idx * 0.12}s`,
              position: 'relative',
              cursor: 'pointer',
            }}
            onMouseOver={e => {e.currentTarget.style.transform='scale(1.045)';e.currentTarget.style.boxShadow='0 8px 32px #e0c08d99';}}
            onMouseOut={e => {e.currentTarget.style.transform='scale(1)';e.currentTarget.style.boxShadow='0 4px 24px #e0c08d55';}}
          >
            <img
              src={p.img}
              alt={p.name}
              style={{
                width: 120,
                height: 90,
                objectFit: 'cover',
                borderRadius: 10,
                background: '#fff',
                transition: 'transform 0.35s cubic-bezier(.4,1.3,.6,1)',
              }}
              onMouseOver={e => e.currentTarget.style.transform='scale(1.13)'}
              onMouseOut={e => e.currentTarget.style.transform='scale(1)'}
            />
            <h3 style={{margin: '16px 0 8px', color: '#7c4a03'}}>{p.name}</h3>
            <div style={{color: '#7c4a03', fontSize: 15, minHeight: 40}}>{p.desc}</div>
            <div style={{color: '#e09100', fontWeight: 700, fontSize: 18, margin: '10px 0'}}>{p.price}</div>
            <button
              style={{
                background: 'linear-gradient(90deg,#ffd966,#e09100)',
                color: '#7c4a03',
                border: 'none',
                borderRadius: 8,
                padding: '10px 24px',
                fontWeight: 700,
                fontSize: 16,
                cursor: 'pointer',
                marginTop: 8,
                boxShadow: '0 2px 8px #e0c08d44',
                transition: 'background 0.18s',
              }}
              onMouseOver={e => e.currentTarget.style.background='linear-gradient(90deg,#e09100,#ffd966)'}
              onMouseOut={e => e.currentTarget.style.background='linear-gradient(90deg,#ffd966,#e09100)'}
            >
              Mua ngay
            </button>
          </div>
        ))}
      </div>
    </section>
  );
} 