import React from 'react';

const news = [
  { id: 1, title: 'Khai trương dịch vụ spa mới', date: '01/06/2024' },
  { id: 2, title: 'Ưu đãi tháng 6 cho khách hàng mới', date: '28/05/2024' },
  { id: 3, title: 'Workshop chăm sóc thú cưng miễn phí', date: '20/05/2024' },
];

export default function NewsSection() {
  return (
    <section style={{padding: '40px 0', background: '#f9f9f9'}}>
      <h2 style={{textAlign: 'center'}}>Tin tức & Sự kiện</h2>
      <div style={{maxWidth: 700, margin: '24px auto 0'}}>
        {news.map(n => (
          <div key={n.id} style={{padding: '16px 0', borderBottom: '1px solid #eee'}}>
            <div style={{fontWeight: 600}}>{n.title}</div>
            <div style={{color: '#888', fontSize: 13}}>{n.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 