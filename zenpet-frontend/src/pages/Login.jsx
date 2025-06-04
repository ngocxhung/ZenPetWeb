import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('Vui lòng nhập đầy đủ thông tin!');
      return;
    }
    // Xử lý đăng nhập ở đây
    setError('');
    console.log('Form submitted:', formData);
  };

  return (
    <div className="zenpet-login-page">
      <div className="zenpet-login-box">
        <h2>Đăng nhập</h2>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="zenpet-login-field">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="zenpet-login-field">
            <label>Mật khẩu</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          {error && <div className="zenpet-login-error">{error}</div>}
          <button type="submit">Đăng nhập</button>
        </form>
        <p>Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link></p>
      </div>
    </div>
  );
} 