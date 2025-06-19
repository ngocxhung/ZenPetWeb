import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import './Product.css';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(false);

  // Lấy danh sách sản phẩm
  useEffect(() => {
    setLoading(true);
    let url = selectedCategory
      ? `https://localhost:7001/Product/Category/${selectedCategory}`
      : 'https://localhost:7001/Product/GetAll';
    axios.get(url)
      .then(res => setProducts(res.data))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, [selectedCategory]);

  // Lấy danh sách danh mục
  useEffect(() => {
    axios.get('https://localhost:7001/api/Category/GetAll')
      .then(res => setCategories(res.data))
      .catch(() => setCategories([]));
  }, []);

  return (
    <div className="zenpet-product-page">
      <PageTitle title="Sản phẩm" />
      <div className="zenpet-product-header">
        <h1>Sản Phẩm ZenPETs</h1>
        <div className="zenpet-category-filter">
          <button
            className={!selectedCategory ? 'active' : ''}
            onClick={() => setSelectedCategory(null)}
          >
            Tất cả
          </button>
          {categories.map(category => (
            <button
              key={category.categoryId}
              className={selectedCategory === category.categoryId ? 'active' : ''}
              onClick={() => setSelectedCategory(category.categoryId)}
            >
              {category.categoryName}
            </button>
          ))}
        </div>
      </div>
      <div className="zenpet-product-list" style={{display: 'flex', justifyContent: 'center', gap: 32, marginTop: 24, flexWrap: 'wrap'}}>
        {loading ? <div>Đang tải sản phẩm...</div> : (
          products.length === 0 ? <div>Không có sản phẩm nào.</div> : (
            products.map(product => (
              <Link to={`/product/${product.productId}`} key={product.productId} className="zenpet-product-card" style={{padding: 0, borderRadius: 18, boxShadow: '0 2px 12px #ffd6e6', background: '#fff', width: 260, position: 'relative', textDecoration: 'none'}}>
                <div style={{position: 'relative'}}>
                  <img src={product.imageUrl.startsWith('http') ? product.imageUrl : `https://localhost:7001${product.imageUrl}`} alt={product.productName} style={{width: 220, height: 220, objectFit: 'cover', borderRadius: 16, margin: '20px auto 0', display: 'block', background: '#fff'}} />
                  {product.discount > 0 && (
                    <span style={{
                      position: 'absolute', top: 12, right: 12, background: '#e14b85', color: '#fff',
                      borderRadius: 16, fontSize: 14, fontWeight: 700, padding: '2px 12px', zIndex: 2
                    }}>
                      -{product.discount}%
                    </span>
                  )}
                </div>
                <div style={{padding: '16px 18px 18px'}}>
                  <div className="zenpet-product-title" style={{
                    fontSize: 18, fontWeight: 700, margin: 0, marginBottom: 6, minHeight: 48, lineHeight: '1.2', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis'
                  }}>{product.productName}</div>
                  <div style={{fontSize: 13, color: '#b94e7c', marginBottom: 4}}>{product.category?.categoryName}</div>
                  <div style={{fontSize: 17, fontWeight: 700, marginBottom: 4}}>
                    {product.discount > 0 ? (
                      <>
                        <span style={{textDecoration: 'line-through', color: '#888', marginRight: 8, fontSize: 14}}>
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
                  <div style={{fontSize: 14, color: '#e14b85'}}>
                    <span style={{fontSize: 16}}>★</span> {product.rating || 0}
                  </div>
                </div>
              </Link>
            ))
          )
        )}
      </div>
    </div>
  );
};

export default Product; 