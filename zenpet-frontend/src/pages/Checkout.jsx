import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useAdmin } from '../contexts/AdminContext';
import QrCode from '../assets/QrCode.png';

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, total, clearCart } = useCart();
  const { addOrder } = useAdmin();
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    payment: 'cod'
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Lưu đơn hàng vào AdminContext
    addOrder({
      ...form,
      totalAmount: total,
      items: cart.map(item => ({
        productId: item.productId,
        productName: item.productName,
        price: item.price,
        discount: item.discount,
        quantity: item.quantity,
        imageUrl: item.imageUrl
      }))
    });
    clearCart();
    alert('Đặt hàng thành công!');
    navigate('/');
  };

  return (
    <div style={{
      maxWidth: 900,
      margin: '0 auto',
      padding: '40px 10px',
      fontFamily: 'inherit',
      minHeight: '80vh'
    }}>
      <h2 style={{
        color: '#e14b85',
        fontWeight: 800,
        fontSize: 28,
        marginBottom: 24,
        letterSpacing: 1
      }}>
        THANH TOÁN
      </h2>
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        gap: 32,
        alignItems: 'flex-start',
        flexWrap: 'wrap'
      }}>
        {/* Cột trái: Thông tin giao hàng */}
        <div style={{
          flex: 2,
          minWidth: 320,
          background: '#fff',
          borderRadius: 12,
          boxShadow: '0 2px 8px #ffd6e6',
          padding: 24
        }}>
          <h3 style={{ color: '#e14b85', fontWeight: 700, fontSize: 20, marginBottom: 18 }}>
            Thông tin giao hàng
          </h3>
          <div style={{ marginBottom: 18 }}>
            <label>Họ và tên *</label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: 18 }}>
            <label>Số điện thoại *</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: 18 }}>
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: 18 }}>
            <label>Địa chỉ nhận hàng *</label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: 18 }}>
            <label>Hình thức thanh toán *</label>
            <div style={{ display: 'flex', gap: 24, marginTop: 8 }}>
              <label style={radioLabelStyle}>
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={form.payment === 'cod'}
                  onChange={handleChange}
                  style={{ marginRight: 8 }}
                />
                Thanh toán khi nhận hàng (COD)
              </label>
              <label style={radioLabelStyle}>
                <input
                  type="radio"
                  name="payment"
                  value="bank"
                  checked={form.payment === 'bank'}
                  onChange={handleChange}
                  style={{ marginRight: 8 }}
                />
                Chuyển khoản ngân hàng
              </label>
            </div>
          </div>
          {form.payment === 'bank' && (
            <div style={{
              background: '#fff7fa',
              border: '1px solid #ffe4ec',
              borderRadius: 10,
              padding: 18,
              marginBottom: 18,
              color: '#b94e7c'
            }}>
              <div style={{ fontWeight: 700, marginBottom: 8 }}>Thông tin chuyển khoản:</div>
              <div>STK: <b>083001022003</b></div>
              <div>Ngân hàng: <b>MB - ĐINH NGỌC HÙNG</b></div>
              <div>
                <b>Nội dung chuyển khoản:</b> <br />
                <span style={{ color: '#e14b85' }}>Tên người mua hàng + số điện thoại</span>
              </div>
              <div style={{ marginTop: 12 }}>
                <img src={QrCode} alt="QR chuyển khoản MB" style={{ width: 240, borderRadius: 12, border: '2px solid #eee' }} />
              </div>
            </div>
          )}
        </div>
        {/* Cột phải: Tổng số tiền và sản phẩm */}
        <div style={{
          flex: 1,
          minWidth: 260,
          background: '#fff',
          borderRadius: 12,
          boxShadow: '0 2px 8px #ffd6e6',
          padding: 24,
          height: 'fit-content'
        }}>
          <h3 style={{ color: '#222', fontWeight: 700, fontSize: 20, marginBottom: 18, borderBottom: '2px solid #ffe4ec', paddingBottom: 10 }}>
            ĐƠN HÀNG
          </h3>
          <div style={{ marginBottom: 18 }}>
            {cart.map(item => (
              <div key={item.productId} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <img src={item.imageUrl} alt={item.productName} style={{ width: 40, height: 40, borderRadius: 6, objectFit: 'cover', background: '#ffe4ec' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ color: '#e14b85', fontWeight: 600, fontSize: 15 }}>{item.productName}</div>
                  <div style={{ color: '#888', fontSize: 14 }}>x{item.quantity}</div>
                </div>
                <div style={{ color: '#b94e7c', fontWeight: 600, fontSize: 15 }}>
                  {item.discount > 0 ? (
                    <>
                      <span style={{ textDecoration: 'line-through', color: '#bbb', fontSize: 13, marginRight: 4 }}>
                        {item.price.toLocaleString('vi-VN')}đ
                      </span>
                      <span>
                        {(item.price * (1 - item.discount / 100)).toLocaleString('vi-VN')}đ
                      </span>
                    </>
                  ) : (
                    <span>{item.price.toLocaleString('vi-VN')}đ</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, fontSize: 17, marginBottom: 18 }}>
            <span>Tổng số tiền:</span>
            <span>{total.toLocaleString('vi-VN')}đ</span>
          </div>
          <button type="submit" style={{
            width: '100%',
            padding: '13px 0',
            borderRadius: 24,
            border: 'none',
            fontWeight: 700,
            fontSize: 17,
            cursor: 'pointer',
            background: 'linear-gradient(90deg, #ffb6d5 0%, #e14b85 100%)',
            color: '#fff',
            boxShadow: '0 2px 8px #ffd6e6',
            marginBottom: 12
          }}>
            Đặt hàng
          </button>
        </div>
      </form>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '10px 12px',
  borderRadius: 8,
  border: '1px solid #eee',
  fontSize: 16,
  marginTop: 4
};

const radioLabelStyle = {
  display: 'flex',
  alignItems: 'center',
  fontWeight: 500,
  color: '#b94e7c',
  fontSize: 16,
  cursor: 'pointer'
};