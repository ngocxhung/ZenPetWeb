import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const overlayStyle = show => ({
  position: 'fixed',
  inset: 0,
  background: show ? 'rgba(0,0,0,0.32)' : 'rgba(0,0,0,0)',
  zIndex: 1001,
  transition: 'background 0.3s',
  pointerEvents: show ? 'auto' : 'none',
});

const slideStyle = show => ({
  position: 'fixed',
  top: 0,
  right: 0,
  width: 410,
  maxWidth: '98vw',
  height: '100vh',
  background: '#fff',
  boxShadow: '-4px 0 32px #ffd6e0cc',
  zIndex: 1002,
  transform: show ? 'translateX(0)' : 'translateX(110%)',
  transition: 'transform 0.38s cubic-bezier(.4,1.3,.6,1)',
  display: 'flex',
  flexDirection: 'column',
});

const closeBtnStyle = {
  position: 'absolute',
  top: 18,
  right: 18,
  background: 'none',
  border: 'none',
  fontSize: 26,
  color: '#e14b85',
  cursor: 'pointer',
  zIndex: 2,
};

const cartHeaderStyle = {
  fontWeight: 800,
  fontSize: 22,
  color: '#e14b85',
  padding: '28px 32px 12px 32px',
  borderBottom: '1px solid #ffe4ec',
  display: 'flex',
  alignItems: 'center',
  gap: 10,
};

const cartListStyle = {
  flex: 1,
  overflowY: 'auto',
  padding: '18px 32px 0 32px',
};

const cartItemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 14,
  marginBottom: 18,
  borderBottom: '1px solid #f5e6ef',
  paddingBottom: 12,
};

const cartImgStyle = {
  width: 64,
  height: 64,
  borderRadius: 12,
  objectFit: 'cover',
  background: '#ffe4ec',
};

const cartInfoStyle = {
  flex: 1,
};

const cartNameStyle = {
  fontWeight: 700,
  fontSize: 15,
  color: '#e14b85',
  marginBottom: 4,
};

const cartPriceStyle = {
  color: '#b94e7c',
  fontWeight: 600,
  fontSize: 15,
};

const cartQtyStyle = {
  color: '#888',
  fontSize: 14,
};

const cartRemoveBtn = {
  background: 'none',
  border: 'none',
  color: '#e14b85',
  fontSize: 20,
  cursor: 'pointer',
};

const cartFooterStyle = {
  borderTop: '1px solid #ffe4ec',
  padding: '18px 32px',
  background: '#fff',
  boxShadow: '0 -2px 12px #ffd6e040',
};

const totalRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  fontWeight: 700,
  fontSize: 18,
  color: '#e14b85',
  marginBottom: 18,
};

const btnStyle = {
  width: '100%',
  padding: '13px 0',
  borderRadius: 24,
  border: 'none',
  fontWeight: 700,
  fontSize: 17,
  marginBottom: 10,
  cursor: 'pointer',
  background: 'linear-gradient(90deg, #ffb6d5 0%, #e14b85 100%)',
  color: '#fff',
  boxShadow: '0 2px 8px #ffd6e6',
  transition: 'background 0.2s',
};

const viewCartBtn = {
  ...btnStyle,
  background: '#fff',
  color: '#e14b85',
  border: '2px solid #e14b85',
  marginBottom: 0,
};

export default function SlideCart({ show, setShow }) {
  const { cart, total, removeFromCart } = useCart();

  return (
    <>
      <div style={overlayStyle(show)} onClick={() => setShow(false)} />
      <aside style={slideStyle(show)}>
        <button style={closeBtnStyle} onClick={() => setShow(false)} title="Đóng giỏ hàng">
          <i className="fas fa-times"></i>
        </button>
        <div style={cartHeaderStyle}>
          <i className="fas fa-shopping-cart" style={{fontSize: 22}}></i>
          Giỏ hàng của bạn
        </div>
        <div style={cartListStyle}>
          {cart.length === 0 ? (
            <div style={{textAlign: 'center', color: '#b94e7c', marginTop: 40}}>Giỏ hàng trống</div>
          ) : cart.map(item => (
            <div key={item.productId} style={cartItemStyle}>
              <img src={item.imageUrl} alt={item.productName} style={cartImgStyle} />
              <div style={cartInfoStyle}>
                <div style={cartNameStyle}>{item.productName}</div>
                <div style={cartPriceStyle}>
                  {item.discount > 0 ? (
                    <>
                      <span style={{textDecoration: 'line-through', color: '#bbb', fontSize: 14, marginRight: 6}}>
                        {item.price.toLocaleString('vi-VN')}đ
                      </span>
                      <span>
                        {(item.price * (1 - item.discount/100)).toLocaleString('vi-VN')}đ
                      </span>
                    </>
                  ) : (
                    <span>{item.price.toLocaleString('vi-VN')}đ</span>
                  )}
                </div>
                <div style={cartQtyStyle}>Số lượng: {item.quantity}</div>
              </div>
              <button style={cartRemoveBtn} title="Xóa khỏi giỏ hàng" onClick={() => removeFromCart(item.productId)}>
                <i className="fas fa-trash"></i>
              </button>
            </div>
          ))}
        </div>
        <div style={cartFooterStyle}>
          <div style={totalRowStyle}>
            <span>Tổng cộng:</span>
            <span>{total.toLocaleString('vi-VN')}đ</span>
          </div>
          <Link to="/checkout">
            <button style={btnStyle}>Thanh toán</button>
          </Link>
          <Link to="/cart">
            <button style={viewCartBtn}>Xem giỏ hàng</button>
          </Link>
        </div>
      </aside>
    </>
  );
} 