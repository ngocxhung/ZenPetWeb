import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

export default function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phoneNumber: '',
    address: ''
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
    if (formData.password !== formData.confirmPassword) {
      setError('Mật khẩu xác nhận không khớp!');
      return;
    }
    // Xử lý đăng ký ở đây
    setError('');
    console.log('Form submitted:', formData);
  };

  return (
    <div className="zenpet-register-page">
      <div className="zenpet-register-box">
        <h2>Đăng ký tài khoản</h2>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="zenpet-register-field">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="zenpet-register-field">
            <label>Mật khẩu</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <div className="zenpet-register-field">
            <label>Xác nhận mật khẩu</label>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
          </div>
          <div className="zenpet-register-field">
            <label>Họ và tên</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
          </div>
          <div className="zenpet-register-field">
            <label>Số điện thoại</label>
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
          </div>
          <div className="zenpet-register-field">
            <label>Địa chỉ</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} required />
          </div>
          {error && <div className="zenpet-register-error">{error}</div>}
          <button type="submit">Đăng ký</button>
        </form>
        <p>Đã có tài khoản? <Link to="/login">Đăng nhập ngay</Link></p>
      </div>
    </div>
  );
} 