import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  // Dữ liệu mẫu cho sản phẩm
  const sampleProducts = {
    1: {
      productId: 1,
      productName: 'Vòng định vị GPS ZenPETs',
      price: 1500000,
      discount: 10,
      rating: 4.5,
      stock: 50,
      imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1000',
      description: 'Vòng định vị GPS thông minh cho thú cưng với các tính năng:\n\n' +
        '- Định vị GPS realtime\n' +
        '- Cảnh báo vùng an toàn\n' +
        '- Theo dõi sức khỏe (vận động, nhịp tim, nhiệt độ)\n' +
        '- Lưu trữ lịch sử di chuyển\n' +
        '- Pin lâu, chống nước\n' +
        '- Kết nối app quản lý nhiều thú cưng'
    },
    2: {
      productId: 2,
      productName: 'Thức ăn cho chó Royal Canin',
      price: 350000,
      discount: 0,
      rating: 4.8,
      stock: 100,
      imageUrl: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?q=80&w=1000',
      description: 'Thức ăn cao cấp cho chó trưởng thành với các ưu điểm:\n\n' +
        '- Cân bằng dinh dưỡng\n' +
        '- Hỗ trợ tiêu hóa\n' +
        '- Tăng cường miễn dịch\n' +
        '- Làm sạch răng\n' +
        '- Hương vị thơm ngon'
    },
    3: {
      productId: 3,
      productName: 'Bàn chải đánh răng cho mèo',
      price: 150000,
      discount: 15,
      rating: 4.2,
      stock: 30,
      imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000',
      description: 'Bàn chải đánh răng chuyên dụng cho mèo với các đặc điểm:\n\n' +
        '- Thiết kế ergonomic\n' +
        '- Lông bàn chải mềm mại\n' +
        '- Tay cầm chống trượt\n' +
        '- Kích thước phù hợp với miệng mèo\n' +
        '- Dễ dàng vệ sinh'
    },
    4: {
      productId: 4,
      productName: 'Chuồng vận chuyển thú cưng',
      price: 850000,
      discount: 5,
      rating: 4.6,
      stock: 20,
      imageUrl: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1000',
      description: 'Chuồng vận chuyển an toàn cho thú cưng với các tính năng:\n\n' +
        '- Chất liệu nhựa cao cấp\n' +
        '- Thiết kế thông thoáng\n' +
        '- Cửa khóa an toàn\n' +
        '- Đệm lót êm ái\n' +
        '- Dễ dàng vệ sinh'
    }
  };

  useEffect(() => {
    // Giả lập loading
    setTimeout(() => {
      setProduct(sampleProducts[id]);
      setLoading(false);
    }, 1000);
  }, [id]);

  const handleQuantityChange = (value) => {
    if (value >= 1 && value <= product.stock) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert('Đã thêm vào giỏ hàng!');
  };

  if (loading) {
    return <div className="zenpet-loading">Đang tải...</div>;
  }

  if (!product) {
    return <div className="zenpet-error">Không tìm thấy sản phẩm</div>;
  }

  return (
    <div className="zenpet-product-detail">
      <div className="zenpet-product-detail-container">
        <div className="zenpet-product-detail-image">
          <img src={product.imageUrl} alt={product.productName} />
          {product.discount > 0 && (
            <div className="zenpet-product-discount">
              -{product.discount}%
            </div>
          )}
        </div>

        <div className="zenpet-product-detail-info">
          <h1>{product.productName}</h1>
          
          <div className="zenpet-product-detail-price">
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

          <div className="zenpet-product-detail-rating">
            <i className="fas fa-star"></i>
            <span>{product.rating?.toFixed(1) || '0.0'}</span>
          </div>

          <div className="zenpet-product-detail-stock">
            <span>Còn lại: {product.stock} sản phẩm</span>
          </div>

          <div className="zenpet-product-detail-quantity">
            <button onClick={() => handleQuantityChange(quantity - 1)}>-</button>
            <input 
              type="number" 
              value={quantity} 
              onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
              min="1"
              max={product.stock}
            />
            <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
          </div>

          <button 
            className="zenpet-add-to-cart-btn"
            onClick={handleAddToCart}
            disabled={product.stock === 0}
          >
            {product.stock === 0 ? 'Hết hàng' : 'Thêm vào giỏ hàng'}
          </button>

          <div className="zenpet-product-detail-description">
            <h2>Mô tả sản phẩm</h2>
            <p style={{ whiteSpace: 'pre-line' }}>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 