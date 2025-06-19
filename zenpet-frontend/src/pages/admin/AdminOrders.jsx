import React, { useState } from 'react';
import { useAdmin } from '../contexts/AdminContext';

const statusList = ['Đang xử lý', 'Hoàn thành', 'Đã hủy'];

export default function AdminOrders() {
  const { orders, updateOrderStatus } = useAdmin();
  const [selected, setSelected] = useState(null);

  return (
    <div style={{ width: '100%', margin: '40px 0', background: 'none', borderRadius: 12, padding: 0 }}>
      <h2 style={{ color: '#e14b85', fontWeight: 800, fontSize: 26, marginBottom: 24, paddingLeft: 8 }}>Quản lý đơn hàng</h2>
      {orders.length === 0 ? <div style={{ color: '#b94e7c', paddingLeft: 8 }}>Chưa có đơn hàng nào</div> : (
        <div style={{ width: '100%', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #ffd6e6' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #ffe4ec', color: '#b94e7c', fontWeight: 700 }}>
                <th style={{ textAlign: 'left', padding: 12 }}>Khách hàng</th>
                <th style={{ padding: 12 }}>SĐT</th>
                <th style={{ padding: 12 }}>Tổng tiền</th>
                <th style={{ padding: 12 }}>Trạng thái</th>
                <th style={{ padding: 12 }}>Ngày đặt</th>
                <th style={{ padding: 12 }}></th>
              </tr>
            </thead>
            <tbody>
              {orders.map(o => (
                <tr key={o.orderId} style={{ borderBottom: '1px solid #f5e6ef' }}>
                  <td style={{ padding: 12 }}>{o.fullName}</td>
                  <td style={{ padding: 12 }}>{o.phone}</td>
                  <td style={{ padding: 12 }}>{o.totalAmount?.toLocaleString('vi-VN')}đ</td>
                  <td style={{ padding: 12 }}>
                    <select value={o.status} onChange={e => updateOrderStatus(o.orderId, e.target.value)} style={{ borderRadius: 6, border: '1px solid #e14b85', color: '#b94e7c', fontWeight: 600 }}>
                      {statusList.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </td>
                  <td style={{ padding: 12 }}>{new Date(o.orderDate).toLocaleString()}</td>
                  <td style={{ textAlign: 'center', padding: 12 }}>
                    <button onClick={() => setSelected(o)} style={{ background: 'linear-gradient(90deg, #ffb6d5 0%, #e14b85 100%)', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 18px', fontWeight: 600, cursor: 'pointer', boxShadow: '0 2px 8px #ffd6e6' }}>
                      Xem chi tiết
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {selected && (
        <>
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.25)', zIndex: 1001 }} onClick={() => setSelected(null)} />
          <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: '#fff', borderRadius: 14, boxShadow: '0 4px 32px #ffd6e6', padding: 36, minWidth: 340, zIndex: 1002, maxWidth: '90vw' }}>
            <h3 style={{ color: '#e14b85', fontWeight: 700, fontSize: 20, marginBottom: 12 }}>Chi tiết đơn hàng</h3>
            <div><b>Khách hàng:</b> {selected.fullName}</div>
            <div><b>SĐT:</b> {selected.phone}</div>
            <div><b>Email:</b> {selected.email}</div>
            <div><b>Địa chỉ:</b> {selected.address}</div>
            <div><b>Hình thức thanh toán:</b> {selected.payment}</div>
            <div><b>Trạng thái:</b> {selected.status}</div>
            <div><b>Ngày đặt:</b> {new Date(selected.orderDate).toLocaleString()}</div>
            <div style={{ margin: '16px 0' }}>
              <b>Sản phẩm:</b>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                {selected.items.map(item => (
                  <li key={item.productId}>
                    {item.productName} x{item.quantity} - {((item.price * (1 - item.discount / 100)) * item.quantity).toLocaleString('vi-VN')}đ
                  </li>
                ))}
              </ul>
            </div>
            <div><b>Tổng tiền:</b> {selected.totalAmount?.toLocaleString('vi-VN')}đ</div>
            <button onClick={() => setSelected(null)} style={{ marginTop: 18, background: '#e14b85', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 18px', fontWeight: 600, cursor: 'pointer' }}>Đóng</button>
          </div>
        </>
      )}
    </div>
  );
} 