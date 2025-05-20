import React from 'react';
import { Link } from 'react-router-dom';

const headerStyle = {
  background: '#fff', // white background
  color: '#7c4a03', // brown text
  padding: '0',
  borderBottom: '2px solid #e0c08d',
  fontFamily: 'inherit',
  boxShadow: '0 2px 8px #0001',
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
  color: '#7c4a03',
  textDecoration: 'none',
};

const menuStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 28,
  fontSize: 16,
};

const authButtonStyle = {
  background: '#7c4a03',
  color: '#ffd966',
  border: 'none',
  borderRadius: 20,
  padding: '6px 18px',
  fontWeight: 700,
  fontSize: 16,
  cursor: 'pointer',
  boxShadow: '0 2px 8px #e0c08d44',
  transition: 'transform 0.2s, box-shadow 0.2s',
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
          <Link to="/about" style={{color: '#7c4a03', textDecoration: 'none'}}>Về chúng tôi</Link>
          <Link to="/services" style={{color: '#7c4a03', textDecoration: 'none'}}>Dịch vụ</Link>
          <Link to="/products" style={{color: '#7c4a03', textDecoration: 'none'}}>Sản phẩm</Link>
          <Link to="/login">
            <button 
              style={authButtonStyle}
              onMouseOver={e => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 4px 12px #e0c08d66';
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 2px 8px #e0c08d44';
              }}
            >
              Đăng nhập
            </button>
          </Link>
          <Link to="/register">
            <button 
              style={{
                ...authButtonStyle,
                background: '#ffd966',
                color: '#7c4a03',
                border: '2px solid #7c4a03',
              }}
              onMouseOver={e => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 4px 12px #e0c08d66';
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 2px 8px #e0c08d44';
              }}
            >
              Đăng ký
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
} 