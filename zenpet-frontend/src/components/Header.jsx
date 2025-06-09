import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SlideCart from './SlideCart';
import { useAdmin } from '../contexts/AdminContext';
import { useCart } from '../contexts/CartContext';

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

const cartBtnStyle = {
  position: 'relative',
  background: '#fff',
  border: 'none',
  borderRadius: 18,
  padding: '7px 18px',
  boxShadow: '0 2px 8px #ffd6e6',
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  cursor: 'pointer',
  fontWeight: 700,
  color: '#e14b85',
  fontSize: 18,
  transition: 'background 0.2s, box-shadow 0.2s',
};

const cartIconStyle = {
  fontSize: 26,
  color: '#e14b85',
};

const cartBadgeStyle = {
  position: 'absolute',
  top: 2,
  right: 8,
  background: '#e14b85',
  color: '#fff',
  borderRadius: '50%',
  fontSize: 13,
  fontWeight: 700,
  minWidth: 22,
  height: 22,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 8px #ffd6e6',
  border: '2px solid #fff',
  zIndex: 2,
};

export default function Header() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { addEmail } = useAdmin();
  const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmail(email);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
    setEmail('');
  };

  return (
    <header style={{ ...headerStyle, position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
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
        <button
          style={cartBtnStyle}
          onClick={() => setShowCart(true)}
          onMouseOver={e => e.currentTarget.style.background = '#ffe4ec'}
          onMouseOut={e => e.currentTarget.style.background = '#fff'}
        >
          <i className="fas fa-shopping-cart" style={cartIconStyle}></i>
          <span style={{fontWeight: 700, fontSize: 16}}>Giỏ hàng</span>
          <span style={cartBadgeStyle}>{cartCount}</span>
        </button>
      </nav>
      <SlideCart show={showCart} setShow={setShowCart} />
    </header>
  );
} 