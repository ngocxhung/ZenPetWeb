import React, { useState } from 'react';
import { useAdmin } from '../contexts/AdminContext';

export default function AdminCategories() {
  const { categories, addCategory, updateCategory, deleteCategory } = useAdmin();
  const [showForm, setShowForm] = useState(false);
  const [editCategory, setEditCategory] = useState(null);
  const [form, setForm] = useState({ categoryName: '' });

  const openAdd = () => {
    setEditCategory(null);
    setForm({ categoryName: '' });
    setShowForm(true);
  };
  const openEdit = (c) => {
    setEditCategory(c);
    setForm({ categoryName: c.categoryName });
    setShowForm(true);
  };
  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    if (editCategory) updateCategory(editCategory.categoryId, form);
    else addCategory(form);
    setShowForm(false);
  };

  return (
    <div style={{ width: '100%', margin: '40px 0', background: 'none', borderRadius: 12, padding: 0 }}>
      <h2 style={{ color: '#e14b85', fontWeight: 800, fontSize: 26, marginBottom: 24, paddingLeft: 8 }}>Quản lý danh mục</h2>
      <button onClick={openAdd} style={{ marginLeft: 8, marginBottom: 18, background: 'linear-gradient(90deg, #ffb6d5 0%, #e14b85 100%)', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 18px', fontWeight: 600, cursor: 'pointer', boxShadow: '0 2px 8px #ffd6e6' }}>Thêm danh mục</button>
      <div style={{ width: '100%', overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #ffd6e6' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #ffe4ec', color: '#b94e7c', fontWeight: 700 }}>
              <th style={{ padding: 12 }}>Tên danh mục</th>
              <th style={{ padding: 12 }}></th>
            </tr>
          </thead>
          <tbody>
            {categories.map(c => (
              <tr key={c.categoryId} style={{ borderBottom: '1px solid #f5e6ef' }}>
                <td style={{ padding: 12 }}>{c.categoryName}</td>
                <td style={{ textAlign: 'center', padding: 12 }}>
                  <button onClick={() => openEdit(c)} style={{ background: '#fff', color: '#e14b85', border: '1px solid #e14b85', borderRadius: 8, padding: '6px 14px', fontWeight: 600, cursor: 'pointer', marginRight: 8 }}>Sửa</button>
                  <button onClick={() => deleteCategory(c.categoryId)} style={{ background: 'linear-gradient(90deg, #ffb6d5 0%, #e14b85 100%)', color: '#fff', border: 'none', borderRadius: 8, padding: '6px 14px', fontWeight: 600, cursor: 'pointer' }}>Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showForm && (
        <>
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.25)', zIndex: 1001 }} onClick={() => setShowForm(false)} />
          <form onSubmit={handleSubmit} style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: '#fff', borderRadius: 14, boxShadow: '0 4px 32px #ffd6e6', padding: 36, minWidth: 340, zIndex: 1002, maxWidth: '90vw', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <h3 style={{ color: '#e14b85', fontWeight: 700, fontSize: 20, marginBottom: 8 }}>{editCategory ? 'Sửa danh mục' : 'Thêm danh mục'}</h3>
            <input name="categoryName" value={form.categoryName} onChange={handleChange} placeholder="Tên danh mục" required style={inputStyle} />
            <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
              <button type="submit" style={{ background: 'linear-gradient(90deg, #ffb6d5 0%, #e14b85 100%)', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 18px', fontWeight: 600, cursor: 'pointer', flex: 1 }}>{editCategory ? 'Lưu' : 'Thêm'}</button>
              <button type="button" onClick={() => setShowForm(false)} style={{ background: '#fff', color: '#e14b85', border: '1px solid #e14b85', borderRadius: 8, padding: '8px 18px', fontWeight: 600, cursor: 'pointer', flex: 1 }}>Hủy</button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '10px 12px',
  borderRadius: 8,
  border: '1px solid #eee',
  fontSize: 16,
  marginTop: 2
}; 