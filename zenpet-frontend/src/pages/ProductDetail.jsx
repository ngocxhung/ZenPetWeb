import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import axios from 'axios';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://localhost:7001/Product/${id}`)
      .then(res => setProduct(res.data))
      .catch(() => setProduct(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="zenpet-product-detail-loading">Đang tải chi tiết sản phẩm...</div>;
  if (!product) return <div className="zenpet-product-detail-error">Không tìm thấy sản phẩm.</div>;

  // Xử lý mô tả chỉ hiển thị 5 dòng đầu nếu chưa mở rộng
  const descriptionLines = product.description ? product.description.split('\n') : [];
  const shortDescription = descriptionLines.slice(0, 5).join('\n');

  return (
    <div style={{maxWidth: 1100, margin: '40px auto', background: '#fff', borderRadius: 28, boxShadow: '0 6px 32px #ffd6e6', padding: 40, display: 'flex', flexDirection: 'column', gap: 32}}>
      <div style={{display: 'flex', gap: 40, alignItems: 'flex-start', flexWrap: 'wrap'}}>
        {/* Ảnh sản phẩm */}
        <div style={{flex: '0 0 380px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <img src={`https://localhost:7001${product.imageUrl}`} alt={product.productName} style={{width: 340, height: 340, objectFit: 'cover', borderRadius: 18, boxShadow: '0 4px 32px #ffd6e6', background: '#fff'}} />
        </div>
        {/* Thông tin sản phẩm */}
        <div style={{flex: 1, minWidth: 260}}>
          <h2 style={{fontSize: 32, fontWeight: 800, marginBottom: 10}}>{product.productName}</h2>
          <div style={{fontSize: 16, color: '#b94e7c', marginBottom: 10}}>
            Danh mục: {product.category?.categoryName || ''}
          </div>
          <div style={{fontSize: 18, color: '#e14b85', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8}}>
            <span style={{fontSize: 22}}>★</span> <span style={{fontWeight: 700}}>{product.rating || 0}</span>
          </div>
          <div style={{fontSize: 26, fontWeight: 700, marginBottom: 14, color: '#e14b85'}}>
            {product.discount > 0 ? (
              <>
                <span style={{textDecoration: 'line-through', color: '#888', marginRight: 12, fontSize: 18}}>
                  {product.price.toLocaleString('vi-VN')}đ
                </span>
                <span style={{color: '#e14b85'}}>
                  {(product.price * (1 - product.discount / 100)).toLocaleString('vi-VN')}đ
                </span>
              </>
            ) : (
              <span style={{color: '#e14b85'}}>{product.price.toLocaleString('vi-VN')}đ</span>
            )}
          </div>
          <div style={{marginBottom: 14, color: '#444'}}>Còn lại: {product.stock} sản phẩm</div>
          {/* Chọn số lượng và nút thêm giỏ hàng */}
          <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24}}>
            <button onClick={() => setQuantity(q => Math.max(1, q - 1))} style={{width: 36, height: 36, borderRadius: '50%', border: '1px solid #e14b85', background: '#fff', color: '#e14b85', fontSize: 20, fontWeight: 700, cursor: 'pointer'}}>-</button>
            <input
              type="number"
              min={1}
              max={product.stock}
              value={quantity}
              onChange={e => setQuantity(Math.max(1, Math.min(product.stock, +e.target.value)))}
              style={{ width: 54, textAlign: 'center', fontSize: 18, border: '1px solid #e14b85', borderRadius: 8, padding: '6px 0', color: '#e14b85', fontWeight: 700 }}
            />
            <button onClick={() => setQuantity(q => Math.min(product.stock, q + 1))} style={{width: 36, height: 36, borderRadius: '50%', border: '1px solid #e14b85', background: '#fff', color: '#e14b85', fontSize: 20, fontWeight: 700, cursor: 'pointer'}}>+</button>
          </div>
          <button
            className="zenpet-add-to-cart-btn"
            style={{width: '100%', padding: '16px 0', fontSize: 20, fontWeight: 700, borderRadius: 24, background: 'linear-gradient(90deg, #ffb6d5 0%, #e14b85 100%)', color: '#fff', border: 'none', boxShadow: '0 2px 12px #ffd6e6', cursor: 'pointer'}}
            onClick={() => addToCart(product, quantity)}
            disabled={product.stock === 0}
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
      {/* Mô tả sản phẩm */}
      <div style={{marginTop: 10}}>
        <h3 style={{fontSize: 22, fontWeight: 800, color: '#e14b85', marginBottom: 10}}>Mô tả sản phẩm</h3>
        <div style={{fontSize: 16, lineHeight: 1.7, color: '#444', background: '#fff7fa', borderRadius: 14, padding: 18, position: 'relative'}}>
          <pre style={{whiteSpace: 'pre-line', background: 'none', fontFamily: 'inherit', margin: 0}}>
            {showDetail ? product.description : shortDescription}
          </pre>
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
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 