import React from 'react';

const news = [
  { id: 1, title: 'Khai trương dịch vụ spa mới', date: '01/06/2024', icon: '🛁' },
  { id: 2, title: 'Ưu đãi tháng 6 cho khách hàng mới', date: '28/05/2024', icon: '🎁' },
  { id: 3, title: 'Workshop chăm sóc thú cưng miễn phí', date: '20/05/2024', icon: '📅' },
];

export default function NewsSection() {
  return (
    <section style={{padding: '40px 0', background: '#f9f9f9'}}>
      <h2 style={{textAlign: 'center'}}>Tin tức & Sự kiện</h2>
      <div style={{maxWidth: 700, margin: '24px auto 0'}}>
        {news.map(n => (
          <div
            key={n.id}
            style={{
              padding: '16px 0',
              borderBottom: '1px solid #eee',
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              transition: 'box-shadow 0.18s, background 0.18s',
              cursor: 'pointer',
            }}
            onMouseOver={e => {e.currentTarget.style.boxShadow='0 2px 12px #e0c08d44';e.currentTarget.style.background='#fffbe6';e.currentTarget.querySelector('div').style.textDecoration='underline';e.currentTarget.querySelector('div').style.color='#e09100';}}
            onMouseOut={e => {e.currentTarget.style.boxShadow='none';e.currentTarget.style.background='';e.currentTarget.querySelector('div').style.textDecoration='none';e.currentTarget.querySelector('div').style.color='#222';}}
          >
            <span style={{fontSize: 22}}>{n.icon}</span>
            <div style={{fontWeight: 600, color: '#222', flex: 1}}>{n.title}</div>
            <div style={{color: '#888', fontSize: 13}}>{n.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 