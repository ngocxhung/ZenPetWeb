import React, { useState } from 'react';

const mockProducts = [
  {
    id: 1,
    name: 'Định vị GPS ZenPET',
    desc: 'Định vị thú cưng thông minh, kết nối app, pin lâu, chống nước.',
    price: 590000,
    oldPrice: 690000,
    rating: 5,
    sold: 1200,
    img: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
    best: true,
  },
  {
    id: 2,
    name: 'Vòng cổ thông minh',
    desc: 'Theo dõi sức khỏe, định vị, chất liệu an toàn cho thú cưng.',
    price: 490000,
    oldPrice: 0,
    rating: 4,
    sold: 1100,
    img: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
    best: false,
  },
  {
    id: 3,
    name: 'Chip định vị mini',
    desc: 'Nhỏ gọn, dễ gắn, pin 7 ngày, cảnh báo ra khỏi vùng an toàn.',
    price: 350000,
    oldPrice: 400000,
    rating: 4,
    sold: 950,
    img: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
    best: false,
  },
  {
    id: 4,
    name: 'Khóa định vị chống thất lạc',
    desc: 'Chống nước IP67, cảnh báo rung, tích hợp đèn LED.',
    price: 420000,
    oldPrice: 0,
    rating: 5,
    sold: 800,
    img: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
    best: false,
  },
  {
    id: 5,
    name: 'Định vị thú cưng Pro',
    desc: 'Định vị chính xác, pin 15 ngày, bảo hành 1 năm.',
    price: 990000,
    oldPrice: 1190000,
    rating: 5,
    sold: 1700,
    img: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
    best: true,
  },
  {
    id: 6,
    name: 'Vòng cổ LED định vị',
    desc: 'Phát sáng ban đêm, định vị GPS, nhiều màu sắc.',
    price: 650000,
    oldPrice: 0,
    rating: 4,
    sold: 600,
    img: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
    best: false,
  },
];

const star = (n) => '★'.repeat(n) + '☆'.repeat(5-n);

export default function Product() {
  const [sort, setSort] = useState('best');
  return (
    <div style={{background: '#f6f6f6', minHeight: '100vh'}}>
      <div style={{maxWidth: 1200, margin: '0 auto', padding: '32px 0'}}>
        <div style={{fontWeight: 700, fontSize: 28, marginBottom: 8, letterSpacing: 1, color: '#d46a92'}}>Định vị thú cưng</div>
        <div style={{color: '#d46a92', marginBottom: 24, fontSize: 16}}>Dùng thử ngay để nhận ưu đãi</div>
        <div style={{display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24}}>
          <div>
            <label style={{fontWeight: 500}}>Sắp xếp</label>
            <select value={sort} onChange={e => setSort(e.target.value)} style={{marginLeft: 8, padding: '4px 12px', borderRadius: 6, border: '1px solid #d46a92'}}>
              <option value="best">Bán chạy</option>
              <option value="price">Giá</option>
              <option value="rating">Đánh giá</option>
            </select>
          </div>
          <button style={{marginLeft: 'auto', background: 'none', border: 'none', color: '#d46a92', cursor: 'pointer', fontWeight: 600, fontSize: 15}}>
            <span style={{marginRight: 4}}>Bộ lọc</span> <span role="img" aria-label="filter">🔍</span>
          </button>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 32}}>
          {mockProducts.map((p, idx) => (
            <div
              key={p.id}
              style={{
                background: '#fff',
                borderRadius: 18,
                boxShadow: '0 4px 18px #d46a9240',
                padding: 20,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                transition: 'transform 0.18s, box-shadow 0.18s',
                cursor: 'pointer',
                minHeight: 390,
                border: p.best ? '2px solid #d46a92' : '1px solid #eee',
                overflow: 'hidden',
              }}
              onMouseOver={e => {e.currentTarget.style.transform='scale(1.03)';e.currentTarget.style.boxShadow='0 8px 32px #d46a9270';}}
              onMouseOut={e => {e.currentTarget.style.transform='';e.currentTarget.style.boxShadow='0 4px 18px #d46a9240';}}
            >
              {p.best && (
                <div style={{position: 'absolute', top: 18, left: 18, background: '#d46a92', color: '#fff', fontWeight: 700, fontSize: 13, padding: '2px 12px', borderRadius: 12, letterSpacing: 1, boxShadow: '0 2px 8px #d46a9240'}}>Best Seller</div>
              )}
              <div style={{width: 160, height: 120, background: '#f9f9f9', borderRadius: 14, marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'}}>
                <img src={p.img} alt={p.name} style={{width: '90%', height: '90%', objectFit: 'contain'}} />
              </div>
              <div style={{fontWeight: 700, fontSize: 18, marginBottom: 4, color: '#222', textAlign: 'center'}}>{p.name}</div>
              <div style={{fontSize: 14, color: '#666', marginBottom: 10, textAlign: 'center', minHeight: 38}}>{p.desc}</div>
              <div style={{display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10}}>
                <span style={{fontWeight: 700, color: '#d46a92', fontSize: 17}}>{p.price.toLocaleString()} đ</span>
                {p.oldPrice > 0 && (
                  <span style={{textDecoration: 'line-through', color: '#aaa', fontSize: 14}}>{p.oldPrice.toLocaleString()} đ</span>
                )}
              </div>
              <button
                style={{
                  background: 'linear-gradient(90deg,#ff3c3c,#d46a92)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 10,
                  padding: '10px 32px',
                  fontWeight: 700,
                  fontSize: 16,
                  marginBottom: 10,
                  marginTop: 2,
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px #d46a9240',
                  transition: 'background 0.18s',
                }}
                onMouseOver={e => e.currentTarget.style.background='linear-gradient(90deg,#d46a92,#ff3c3c)'}
                onMouseOut={e => e.currentTarget.style.background='linear-gradient(90deg,#ff3c3c,#d46a92)'}
              >
                Mua ngay
              </button>
              <div style={{display: 'flex', alignItems: 'center', gap: 8, fontSize: 15, color: '#d46a92', fontWeight: 600}}>
                <span>{star(p.rating)}</span>
                <span style={{color: '#bbb'}}>|</span>
                <span style={{color: '#444'}}>Đã bán: {p.sold}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 