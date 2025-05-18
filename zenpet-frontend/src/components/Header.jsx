import React from 'react';
import { Link } from 'react-router-dom';

const headerStyle = {
  background: '#7c4a03', // nâu đậm
  color: '#ffd966', // vàng nhạt
  padding: '0',
  borderBottom: '2px solid #e0c08d',
  fontFamily: 'inherit',
};

const navStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: 1200,
  margin: '0 auto',
  height: 64,
};

const logoStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  fontWeight: 700,
  fontSize: 22,
  color: '#ffd966',
  textDecoration: 'none',
};

const menuStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 28,
  fontSize: 16,
};

const cartBtnStyle = {
  background: '#ffd966',
  color: '#7c4a03',
  border: 'none',
  borderRadius: 20,
  padding: '6px 18px',
  fontWeight: 700,
  fontSize: 16,
  marginLeft: 16,
  cursor: 'pointer',
  boxShadow: '0 2px 8px #e0c08d44',
};

export default function Header() {
  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <Link to="/" style={logoStyle}>
          <img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" alt="ZenPet Logo" style={{width: 40, background: '#ffe4ec', borderRadius: '50%'}} />
          ZenPet
        </Link>
        <div style={menuStyle}>
          <Link to="/about" style={{color: '#ffd966', textDecoration: 'none'}}>Về chúng tôi</Link>
          <Link to="/services" style={{color: '#ffd966', textDecoration: 'none'}}>Dịch vụ</Link>
          <Link to="/products" style={{color: '#ffd966', textDecoration: 'none'}}>Sản phẩm</Link>
          <input type="text" placeholder="Tìm kiếm..." style={{borderRadius: 16, border: 'none', padding: '6px 14px', outline: 'none', fontSize: 15}} />
          <Link to="/cart">
            <button style={cartBtnStyle}>
              🛒 Giỏ hàng
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
} 