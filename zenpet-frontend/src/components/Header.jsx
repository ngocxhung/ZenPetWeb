import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const headerStyle = {
  background: 'linear-gradient(90deg, #fff 60%, #ffe4ec 100%)',
  color: '#e14b85',
  padding: '0',
  borderBottom: '2px solid #ffe4ec',
  fontFamily: 'inherit',
  boxShadow: '0 2px 8px #ffd6e6',
};

const navStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: 1200,
  margin: '0 auto',
  height: 70,
  width: '100%',
};

const logoStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  fontWeight: 700,
  fontSize: 26,
  color: '#e14b85',
  textDecoration: 'none',
};

const menuStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 28,
  fontSize: 16,
};

const emailFormStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  background: '#fff',
  borderRadius: 18,
  padding: '4px 10px',
  boxShadow: '0 2px 8px #ffd6e6',
};

const emailInputStyle = {
  border: '1px solid #ffb6d5',
  borderRadius: 8,
  padding: '7px 12px',
  fontSize: 15,
  outline: 'none',
  width: 180,
};

const emailButtonStyle = {
  background: '#ff5e9c',
  color: '#fff',
  border: 'none',
  borderRadius: 8,
  padding: '7px 18px',
  fontSize: 15,
  cursor: 'pointer',
  fontWeight: 600,
  transition: 'background 0.2s',
};

export default function Header() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
    setEmail('');
  };

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <Link to="/" style={logoStyle}>
          <img src={require('../assets/logo.png')} alt="ZenPet Logo" style={{width: 48, background: 'none', borderRadius: '50%'}} />
          ZenPETs
        </Link>
        <div style={menuStyle}>
          <Link to="/about" style={{color: '#e14b85', textDecoration: 'none'}}>Về chúng tôi</Link>
          <Link to="/service" style={{color: '#e14b85', textDecoration: 'none'}}>Dịch vụ</Link>
          <Link to="/product" style={{color: '#e14b85', textDecoration: 'none'}}>Sản phẩm</Link>
        </div>
        <form style={emailFormStyle} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Nhập email..."
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={emailInputStyle}
          />
          <button type="submit" style={emailButtonStyle}>Gửi</button>
          {submitted && <span style={{color: '#1bbf5c', marginLeft: 8, fontWeight: 500}}>Đã gửi!</span>}
        </form>
      </nav>
    </header>
  );
} 