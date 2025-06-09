import React, { useState } from 'react';
import { useAdmin } from '../contexts/AdminContext';

export default function AdminProducts() {
  const { products, addProduct, updateProduct, deleteProduct, categories } = useAdmin();
  const [showForm, setShowForm] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [form, setForm] = useState({
    productName: '', price: '', discount: '', stock: '', imageUrl: '', description: '', categoryId: ''
  });

  const openAdd = () => {
    setEditProduct(null);
    setForm({ productName: '', price: '', discount: '', stock: '', imageUrl: '', description: '', categoryId: '' });
    setShowForm(true);
  };
  const openEdit = (p) => {
    setEditProduct(p);
    setForm({
      productName: p.productName,
      price: p.price,
      discount: p.discount,
      stock: p.stock,
      imageUrl: p.imageUrl,
      description: p.description,
      categoryId: p.categoryId || ''
    });
    setShowForm(true);
  };
  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      ...form,
      price: +form.price,
      discount: +form.discount,
      stock: +form.stock,
      categoryId: +form.categoryId
    };
    if (editProduct) updateProduct(editProduct.productId, formData);
    else addProduct(formData);
    setShowForm(false);
  };

  const safeProducts = Array.isArray(products) ? products : [];

  return (
    <div style={{ width: '100%', margin: '40px 0', background: 'none', borderRadius: 12, padding: 0 }}>
      <h2 style={{ color: '#e14b85', fontWeight: 800, fontSize: 26, marginBottom: 24, paddingLeft: 8 }}>Quản lý sản phẩm</h2>
      <button onClick={openAdd} style={{ marginLeft: 8, marginBottom: 18, background: 'linear-gradient(90deg, #ffb6d5 0%, #e14b85 100%)', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 18px', fontWeight: 600, cursor: 'pointer', boxShadow: '0 2px 8px #ffd6e6' }}>Thêm sản phẩm</button>
      <div style={{ width: '100%', overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #ffd6e6' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #ffe4ec', color: '#b94e7c', fontWeight: 700 }}>
              <th style={{ padding: 12 }}>Tên sản phẩm</th>
              <th style={{ padding: 12 }}>Danh mục</th>
              <th style={{ padding: 12 }}>Giá</th>
              <th style={{ padding: 12 }}>Giảm giá (%)</th>
              <th style={{ padding: 12 }}>Kho</th>
              <th style={{ padding: 12 }}>Ảnh</th>
              <th style={{ padding: 12 }}>Mô tả</th>
              <th style={{ padding: 12 }}></th>
            </tr>
          </thead>
          <tbody>
            {safeProducts.map(p => (
              <tr key={p.productId} style={{ borderBottom: '1px solid #f5e6ef' }}>
                <td style={{ padding: 12 }}>{p.productName}</td>
                <td style={{ padding: 12 }}>{p.categoryName}</td>
                <td style={{ padding: 12 }}>{p.price.toLocaleString('vi-VN')}đ</td>
                <td style={{ padding: 12 }}>{p.discount}%</td>
                <td style={{ padding: 12 }}>{p.stock}</td>
                <td style={{ padding: 12 }}><img src={p.imageUrl} alt={p.productName} style={{ width: 48, height: 48, borderRadius: 6, objectFit: 'cover', background: '#ffe4ec' }} /></td>
                <td style={{ padding: 12, maxWidth: 200, whiteSpace: 'pre-line', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.description}</td>
                <td style={{ textAlign: 'center', padding: 12 }}>
                  <button onClick={() => openEdit(p)} style={{ background: '#fff', color: '#e14b85', border: '1px solid #e14b85', borderRadius: 8, padding: '6px 14px', fontWeight: 600, cursor: 'pointer', marginRight: 8 }}>Sửa</button>
                  <button onClick={() => deleteProduct(p.productId)} style={{ background: 'linear-gradient(90deg, #ffb6d5 0%, #e14b85 100%)', color: '#fff', border: 'none', borderRadius: 8, padding: '6px 14px', fontWeight: 600, cursor: 'pointer' }}>Xóa</button>
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
            <h3 style={{ color: '#e14b85', fontWeight: 700, fontSize: 20, marginBottom: 8 }}>{editProduct ? 'Sửa sản phẩm' : 'Thêm sản phẩm'}</h3>
            <input name="productName" value={form.productName} onChange={handleChange} placeholder="Tên sản phẩm" required style={inputStyle} />
            <select name="categoryId" value={form.categoryId} onChange={handleChange} required style={inputStyle}>
              <option value="">Chọn danh mục</option>
              {categories.map(c => <option key={c.categoryId} value={c.categoryId}>{c.categoryName}</option>)}
            </select>
            <input name="price" value={form.price} onChange={handleChange} placeholder="Giá" type="number" min={0} required style={inputStyle} />
            <input name="discount" value={form.discount} onChange={handleChange} placeholder="Giảm giá (%)" type="number" min={0} max={100} required style={inputStyle} />
            <input name="stock" value={form.stock} onChange={handleChange} placeholder="Kho" type="number" min={0} required style={inputStyle} />
            <input name="imageUrl" value={form.imageUrl} onChange={handleChange} placeholder="Link ảnh" required style={inputStyle} />
            <textarea name="description" value={form.description} onChange={handleChange} placeholder="Mô tả" rows={3} style={inputStyle} />
            <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
              <button type="submit" style={{ background: 'linear-gradient(90deg, #ffb6d5 0%, #e14b85 100%)', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 18px', fontWeight: 600, cursor: 'pointer', flex: 1 }}>{editProduct ? 'Lưu' : 'Thêm'}</button>
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