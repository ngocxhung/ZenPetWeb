import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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

const iconButtonStyle = {
  background: 'none',
  border: 'none',
  color: '#7c4a03',
  cursor: 'pointer',
  padding: '8px',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  fontSize: 16,
  fontWeight: 600,
};

export default function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (token && userData) {
      setIsAuthenticated(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser(null);
    navigate('/');
  };

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
          
          {isAuthenticated ? (
            <>
              <Link to="/profile">
                <button 
                  style={iconButtonStyle}
                  onMouseOver={e => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" 
                    alt="Profile" 
                    style={{width: 24, height: 24}}
                  />
                  {user?.name}
                </button>
              </Link>
              <Link to="/cart">
                <button 
                  style={iconButtonStyle}
                  onMouseOver={e => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/2838/2838895.png" 
                    alt="Cart" 
                    style={{width: 24, height: 24}}
                  />
                  Giỏ hàng
                </button>
              </Link>
              <button 
                onClick={handleLogout}
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
                Đăng xuất
              </button>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </nav>
    </header>
  );
} 