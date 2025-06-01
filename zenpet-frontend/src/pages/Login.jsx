import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý đăng nhập ở đây
    console.log('Form submitted:', formData);
  };

  return (
    <div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #fff5e6 0%, #ffe4ec 100%)'}}>
      <div style={{background: '#fff', padding: '40px', borderRadius: '20px', boxShadow: '0 4px 24px rgba(212, 106, 146, 0.2)', width: '100%', maxWidth: '400px'}}>
        <h2 style={{textAlign: 'center', color: '#d46a92', marginBottom: '30px', fontSize: '28px'}}>Đăng nhập</h2>
        <form onSubmit={handleSubmit}>
          <div style={{marginBottom: '20px'}}>
            <label style={{display: 'block', marginBottom: '8px', color: '#7c4a03', fontWeight: '600'}}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1.5px solid #ffd6e0',
                fontSize: '16px',
                outline: 'none'
              }}
              required
            />
          </div>
          <div style={{marginBottom: '30px'}}>
            <label style={{display: 'block', marginBottom: '8px', color: '#7c4a03', fontWeight: '600'}}>Mật khẩu</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1.5px solid #ffd6e0',
                fontSize: '16px',
                outline: 'none'
              }}
              required
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '14px',
              background: 'linear-gradient(90deg, #d46a92, #e09100)',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background 0.3s'
            }}
            onMouseOver={e => e.currentTarget.style.background = 'linear-gradient(90deg, #e09100, #d46a92)'}
            onMouseOut={e => e.currentTarget.style.background = 'linear-gradient(90deg, #d46a92, #e09100)'}
          >
            Đăng nhập
          </button>
        </form>
        <p style={{textAlign: 'center', marginTop: '20px', color: '#666'}}>
          Chưa có tài khoản?{' '}
          <Link to="/register" style={{color: '#d46a92', textDecoration: 'none', fontWeight: '600'}}>
            Đăng ký ngay
          </Link>
        </p>
      </div>
    </div>
  );
} 