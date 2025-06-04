import React, { useState } from 'react';
import './Checkout.css';

export default function Checkout() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    note: ''
  });
  const [success, setSuccess] = useState(false);

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});
  const handleSubmit = e => {
    e.preventDefault();
    setSuccess(true);
  };

  // Mock order summary
  const order = {
    items: [
      { name: 'Gói chăm sóc toàn diện', price: 500000 },
      { name: 'Vòng định vị thông minh', price: 1200000 }
    ],
    total: 1700000
  };

  return (
    <div className="zenpet-checkout-page">
      <div className="zenpet-checkout-header">Thanh toán đơn hàng</div>
      <div className="zenpet-checkout-content">
        <form className="zenpet-checkout-form" onSubmit={handleSubmit}>
          <label>Họ và tên
            <input name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>Số điện thoại
            <input name="phone" value={form.phone} onChange={handleChange} required />
          </label>
          <label>Địa chỉ nhận hàng
            <input name="address" value={form.address} onChange={handleChange} required />
          </label>
          <label>Ghi chú
            <textarea name="note" value={form.note} onChange={handleChange} />
          </label>
          <button type="submit">Thanh toán</button>
          {success && <div className="zenpet-checkout-success">Đặt hàng thành công!</div>}
        </form>
        <div className="zenpet-checkout-summary">
          <h3>Đơn hàng của bạn</h3>
          <ul>
            {order.items.map(item => (
              <li key={item.name}>{item.name} <span>{item.price.toLocaleString()}đ</span></li>
            ))}
          </ul>
          <div className="zenpet-checkout-total">Tổng: <b>{order.total.toLocaleString()}đ</b></div>
        </div>
      </div>
    </div>
  );
} 