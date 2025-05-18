import React from 'react';

const footerStyle = {
  background: '#7c4a03',
  color: '#ffd966',
  padding: '32px 0 0',
  fontSize: 15,
  marginTop: 40,
};
const colStyle = { flex: 1, minWidth: 180, marginBottom: 24 };
const linkStyle = { color: '#ffd966', textDecoration: 'none', display: 'block', margin: '4px 0' };

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={{maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 32, flexWrap: 'wrap', padding: '0 16px'}}>
        <div style={colStyle}>
          <img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" alt="ZenPet Logo" style={{width: 48, background: '#ffe4ec', borderRadius: '50%', marginBottom: 8}} />
          <div>Chuyên vòng định vị thú cưng & dịch vụ chăm sóc toàn diện.</div>
          <div style={{marginTop: 8, color: '#fff'}}>Hotline: <b>1900 1234</b></div>
          <div>Email: <a href="mailto:support@zenpet.vn" style={linkStyle}>support@zenpet.vn</a></div>
        </div>
        <div style={colStyle}>
          <b>Nhận ưu đãi ngay</b>
          <form style={{marginTop: 8}}>
            <input type="email" placeholder="Nhập email của bạn" style={{borderRadius: 16, border: 'none', padding: '6px 14px', fontSize: 15, marginRight: 8}} />
            <button type="submit" style={{background: '#ffd966', color: '#7c4a03', border: 'none', borderRadius: 16, padding: '6px 16px', fontWeight: 700, cursor: 'pointer'}}>Đăng ký</button>
          </form>
        </div>
        <div style={colStyle}>
          <b>Kết nối với chúng tôi</b>
          <div style={{marginTop: 8}}>
            <a href="#" style={linkStyle}>Facebook</a>
            <a href="#" style={linkStyle}>Instagram</a>
            <a href="#" style={linkStyle}>Zalo</a>
          </div>
        </div>
        <div style={colStyle}>
          <b>Dịch vụ</b>
          <a href="#" style={linkStyle}>Vòng định vị thú cưng</a>
          <a href="#" style={linkStyle}>Spa & Grooming</a>
          <a href="#" style={linkStyle}>Huấn luyện</a>
          <a href="#" style={linkStyle}>Khách sạn thú cưng</a>
        </div>
      </div>
      <div style={{textAlign: 'center', color: '#fff', marginTop: 24, padding: 8, background: '#6a3a01'}}>
        © 2024 ZenPet. All rights reserved.
      </div>
    </footer>
  );
} 