import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    productName: '', price: '', discount: '', stock: '', imageUrl: '', description: '', categoryId: ''
  });
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [detailProduct, setDetailProduct] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    axios.get('https://localhost:7001/Product/GetAll').then(res => setProducts(res.data)).catch(() => setProducts([]));
    axios.get('https://localhost:7001/api/Category/GetAll').then(res => setCategories(res.data)).catch(() => setCategories([]));
  }, []);

  const openAdd = () => {
    setForm({ productName: '', price: '', discount: '', stock: '', imageUrl: '', description: '', categoryId: '' });
    setFile(null);
    setShowForm(true);
  };

  const handleFileChange = e => {
    const f = e.target.files[0];
    setFile(f);
    if (f) {
      const formData = new FormData();
      formData.append('file', f);
      setUploading(true);
      axios.post('/api/Upload/Image', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      }).then(res => {
        setForm(form => ({ ...form, imageUrl: res.data }));
      }).finally(() => setUploading(false));
    }
  };

  return (
    <div style={{maxWidth: 1100, margin: '40px auto', background: '#fff', borderRadius: 18, boxShadow: '0 4px 24px #ffd6e6', padding: 32}}>
      <h2 style={{fontSize: 28, fontWeight: 800, color: '#e14b85', marginBottom: 24}}>Quản lý sản phẩm</h2>
      <button onClick={openAdd} style={{marginBottom: 18, background: '#e14b85', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 22px', fontWeight: 700, fontSize: 16, cursor: 'pointer'}}>Thêm sản phẩm</button>
      <table style={{width: '100%', borderCollapse: 'collapse', marginBottom: 32}}>
        <thead>
          <tr style={{background: '#ffe4ec', color: '#e14b85'}}>
            <th>Tên sản phẩm</th>
            <th>Danh mục</th>
            <th>Giá</th>
            <th>Giảm</th>
            <th>Tồn kho</th>
            <th>Ảnh</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.productId} style={{ borderBottom: '1px solid #f5e6ef' }}>
              <td>{p.productName}</td>
              <td>{p.category?.categoryName}</td>
              <td>{p.price?.toLocaleString('vi-VN')}đ</td>
              <td>{p.discount}%</td>
              <td>{p.stock}</td>
              <td><img src={p.imageUrl.startsWith('http') ? p.imageUrl : `https://localhost:7001${p.imageUrl}`} alt={p.productName} style={{width: 48, height: 48, objectFit: 'cover', borderRadius: 6, background: '#ffe4ec'}} /></td>
              <td>
                <button
                  onClick={() => setDetailProduct(p)}
                  style={{
                    background: 'linear-gradient(90deg, #ffb6d5 0%, #e14b85 100%)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 8,
                    padding: '7px 18px',
                    fontWeight: 700,
                    fontSize: 15,
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px #ffd6e6',
                  }}>
                  Xem chi tiết
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showForm && (
        <div style={{background: '#fff7fa', borderRadius: 14, padding: 24, boxShadow: '0 2px 12px #ffd6e6', maxWidth: 520, margin: '0 auto'}}>
          <h3 style={{color: '#e14b85', fontWeight: 700, fontSize: 20, marginBottom: 18}}>Thêm sản phẩm mới</h3>
          <div style={{display: 'flex', flexDirection: 'column', gap: 14}}>
            <input type="text" name="productName" placeholder="Tên sản phẩm" value={form.productName} onChange={e => setForm(f => ({...f, productName: e.target.value}))} style={{padding: 8, borderRadius: 8, border: '1px solid #e14b85'}} />
            <select name="categoryId" value={form.categoryId} onChange={e => setForm(f => ({...f, categoryId: e.target.value}))} style={{padding: 8, borderRadius: 8, border: '1px solid #e14b85'}}>
              <option value="">Chọn danh mục</option>
              {categories.map(c => <option key={c.categoryId} value={c.categoryId}>{c.categoryName}</option>)}
            </select>
            <input type="number" name="price" placeholder="Giá" value={form.price} onChange={e => setForm(f => ({...f, price: e.target.value}))} style={{padding: 8, borderRadius: 8, border: '1px solid #e14b85'}} />
            <input type="number" name="discount" placeholder="Giảm giá (%)" value={form.discount} onChange={e => setForm(f => ({...f, discount: e.target.value}))} style={{padding: 8, borderRadius: 8, border: '1px solid #e14b85'}} />
            <input type="number" name="stock" placeholder="Tồn kho" value={form.stock} onChange={e => setForm(f => ({...f, stock: e.target.value}))} style={{padding: 8, borderRadius: 8, border: '1px solid #e14b85'}} />
            <textarea name="description" placeholder="Mô tả" value={form.description} onChange={e => setForm(f => ({...f, description: e.target.value}))} style={{padding: 8, borderRadius: 8, border: '1px solid #e14b85', minHeight: 60}} />
            <input type="file" accept="image/*" onChange={handleFileChange} style={{marginTop: 8}} />
            {uploading && <div style={{color: '#e14b85'}}>Đang tải ảnh lên...</div>}
            {form.imageUrl && <img src={form.imageUrl.startsWith('http') ? form.imageUrl : `https://localhost:7001${form.imageUrl}`} alt="preview" style={{width: 120, height: 120, objectFit: 'cover', borderRadius: 10, marginTop: 8, background: '#ffe4ec'}} />}
          </div>
        </div>
      )}
      {detailProduct && (
        <div style={{position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.18)', zIndex: 1001, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div style={{background: '#fff', borderRadius: 18, boxShadow: '0 6px 32px #ffd6e6', padding: 36, minWidth: 340, maxWidth: 520, width: '90vw', position: 'relative', maxHeight: '90vh', overflowY: 'auto'}}>
            <button onClick={() => { setDetailProduct(null); setShowDetail(false); }} style={{position: 'absolute', top: 16, right: 16, background: '#ffe4ec', color: '#e14b85', border: 'none', borderRadius: '50%', width: 36, height: 36, fontWeight: 700, fontSize: 20, cursor: 'pointer'}}>×</button>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16}}>
              <img src={detailProduct.imageUrl.startsWith('http') ? detailProduct.imageUrl : `https://localhost:7001${detailProduct.imageUrl}`} alt={detailProduct.productName} style={{width: 180, height: 180, objectFit: 'cover', borderRadius: 14, boxShadow: '0 2px 12px #ffd6e6', background: '#fff'}} />
              <h2 style={{fontSize: 24, fontWeight: 800, color: '#e14b85', margin: 0}}>{detailProduct.productName}</h2>
              <div style={{fontSize: 16, color: '#b94e7c'}}>Danh mục: {detailProduct.category?.categoryName || ''}</div>
              <div style={{fontSize: 18, color: '#e14b85'}}>⭐ {detailProduct.rating || 0}</div>
              <div style={{fontSize: 20, fontWeight: 700, color: '#e14b85'}}>
                {detailProduct.discount > 0 ? (
                  <>
                    <span style={{textDecoration: 'line-through', color: '#888', marginRight: 10, fontSize: 15}}>
                      {detailProduct.price.toLocaleString('vi-VN')}đ
                    </span>
                    <span style={{color: '#e14b85'}}>
                      {(detailProduct.price * (1 - detailProduct.discount / 100)).toLocaleString('vi-VN')}đ
                    </span>
                  </>
                ) : (
                  <span style={{color: '#e14b85'}}>{detailProduct.price.toLocaleString('vi-VN')}đ</span>
                )}
              </div>
              <div style={{color: '#444'}}>Tồn kho: {detailProduct.stock}</div>
              <div style={{marginTop: 10, fontSize: 15, color: '#444', background: '#fff7fa', borderRadius: 10, padding: 12, width: '100%', whiteSpace: 'pre-line', position: 'relative'}}>
                {(() => {
                  const descriptionLines = detailProduct.description ? detailProduct.description.split('\n') : [];
                  const shortDescription = descriptionLines.slice(0, 5).join('\n');
                  return (
                    <>
                      {showDetail ? detailProduct.description : shortDescription}
                      {descriptionLines.length > 5 && (
                        <div style={{display: 'flex', justifyContent: 'center', marginTop: 10}}>
                          <button
                            onClick={() => setShowDetail(v => !v)}
                            style={{
                              background: showDetail ? 'linear-gradient(90deg,#ffe4ec,#e14b85)' : '#fff',
                              color: showDetail ? '#fff' : '#e14b85',
                              border: '1.5px solid #e14b85',
                              fontWeight: 700,
                              cursor: 'pointer',
                              fontSize: 15,
                              padding: '7px 28px',
                              borderRadius: 18,
                              boxShadow: '0 2px 8px #ffd6e6',
                              transition: 'all 0.18s',
                              outline: 'none',
                            }}
                            onMouseOver={e => {
                              e.currentTarget.style.background = 'linear-gradient(90deg,#ffe4ec,#e14b85)';
                              e.currentTarget.style.color = '#fff';
                            }}
                            onMouseOut={e => {
                              e.currentTarget.style.background = showDetail ? 'linear-gradient(90deg,#ffe4ec,#e14b85)' : '#fff';
                              e.currentTarget.style.color = showDetail ? '#fff' : '#e14b85';
                            }}
                          >
                            {showDetail ? 'Ẩn bớt' : 'Xem thêm'}
                          </button>
                        </div>
                      )}
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 