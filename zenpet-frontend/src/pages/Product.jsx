import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAdmin } from '../contexts/AdminContext';
import './Product.css';

const Product = () => {
  const { products, categories } = useAdmin();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(false);

  // Lọc sản phẩm theo danh mục thực tế
  const filteredProducts = Array.isArray(products)
    ? (selectedCategory ? products.filter(p => p.categoryId === selectedCategory) : products)
    : [];

  return (
    <div className="zenpet-product-page">
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

      {loading ? (
        <div className="zenpet-loading">Đang tải...</div>
      ) : (
        <div className="zenpet-product-grid">
          {filteredProducts.map(product => (
            <Link to={`/product/${product.productId}`} key={product.productId} className="zenpet-product-card">
              <div className="zenpet-product-image">
                <img src={product.imageUrl} alt={product.productName} />
                {product.discount > 0 && (
                  <div className="zenpet-product-discount">
                    -{product.discount}%
                  </div>
                )}
              </div>
              <div className="zenpet-product-info">
                <h3>{product.productName}</h3>
                <div style={{ color: '#b94e7c', fontSize: 13, marginBottom: 4 }}>{product.categoryName}</div>
                <div className="zenpet-product-price">
                  {product.discount > 0 ? (
                    <>
                      <span className="original-price">
                        {product.price.toLocaleString('vi-VN')}đ
                      </span>
                      <span className="discounted-price">
                        {(product.price * (1 - product.discount / 100)).toLocaleString('vi-VN')}đ
                      </span>
                    </>
                  ) : (
                    <span>{product.price.toLocaleString('vi-VN')}đ</span>
                  )}
                </div>
                <div className="zenpet-product-rating">
                  <i className="fas fa-star"></i>
                  <span>{product.rating?.toFixed(1) || '0.0'}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Product; 