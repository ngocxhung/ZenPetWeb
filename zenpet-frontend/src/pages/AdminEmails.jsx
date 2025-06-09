import React from 'react';
import { useAdmin } from '../contexts/AdminContext';

export default function AdminEmails() {
  const { emails, removeEmail } = useAdmin();
  return (
    <div style={{ maxWidth: 600, margin: '40px auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #ffd6e6', padding: 32 }}>
      <h2 style={{ color: '#e14b85', fontWeight: 800, fontSize: 26, marginBottom: 24 }}>Danh sách email khách ghé thăm</h2>
      {emails.length === 0 ? <div style={{ color: '#b94e7c' }}>Chưa có email nào</div> : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #ffe4ec', color: '#b94e7c', fontWeight: 700 }}>
              <th style={{ textAlign: 'left', padding: 8 }}>Email</th>
              <th style={{ padding: 8 }}>Ngày gửi</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {emails.map(e => (
              <tr key={e.id} style={{ borderBottom: '1px solid #f5e6ef' }}>
                <td style={{ padding: 8 }}>{e.email}</td>
                <td style={{ padding: 8 }}>{new Date(e.createdAt).toLocaleString()}</td>
                <td style={{ textAlign: 'center' }}>
                  <button onClick={() => removeEmail(e.id)} style={{ background: 'none', border: 'none', color: '#e14b85', fontSize: 18, cursor: 'pointer' }}>
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
} 