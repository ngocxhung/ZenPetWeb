import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AdminCategories() {
  const [categories, setCategories] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ categoryName: '' });

  useEffect(() => {
    axios.get('/api/Category/GetAll').then(res => setCategories(res.data)).catch(() => setCategories([]));
  }, []);

  const openAdd = () => {
    setForm({ categoryName: '' });
    setShowForm(true);
  };

  return (
    <div style={{maxWidth: 700, margin: '40px auto', background: '#fff', borderRadius: 18, boxShadow: '0 4px 24px #ffd6e6', padding: 32}}>
      <h2 style={{fontSize: 28, fontWeight: 800, color: '#e14b85', marginBottom: 24}}>Quản lý danh mục</h2>
      <button onClick={openAdd} style={{marginBottom: 18, background: '#e14b85', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 22px', fontWeight: 700, fontSize: 16, cursor: 'pointer'}}>Thêm danh mục</button>
      <table style={{width: '100%', borderCollapse: 'collapse', marginBottom: 32}}>
        <thead>
          <tr style={{background: '#ffe4ec', color: '#e14b85'}}>
            <th>Tên danh mục</th>
            <th>Ngày tạo</th>
            <th>Ngày cập nhật</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(c => (
            <tr key={c.categoryId} style={{ borderBottom: '1px solid #f5e6ef' }}>
              <td>{c.categoryName}</td>
              <td>{c.createAt ? new Date(c.createAt).toLocaleString('vi-VN') : ''}</td>
              <td>{c.updateTime ? new Date(c.updateTime).toLocaleString('vi-VN') : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {showForm && (
        <div style={{background: '#fff7fa', borderRadius: 14, padding: 24, boxShadow: '0 2px 12px #ffd6e6', maxWidth: 420, margin: '0 auto'}}>
          <h3 style={{color: '#e14b85', fontWeight: 700, fontSize: 20, marginBottom: 18}}>Thêm danh mục mới</h3>
          <div style={{display: 'flex', flexDirection: 'column', gap: 14}}>
            <input type="text" name="categoryName" placeholder="Tên danh mục" value={form.categoryName} onChange={e => setForm(f => ({...f, categoryName: e.target.value}))} style={{padding: 8, borderRadius: 8, border: '1px solid #e14b85'}} />
          </div>
        </div>
      )}
    </div>
  );
} 