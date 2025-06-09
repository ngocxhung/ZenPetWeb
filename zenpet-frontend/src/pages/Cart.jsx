import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, total } = useCart();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 10px', fontFamily: 'inherit', minHeight: '80vh' }}>
      <h2 style={{ color: '#e14b85', fontWeight: 800, fontSize: 28, marginBottom: 24, letterSpacing: 1 }}>
        GIỎ HÀNG CỦA BẠN
      </h2>
      <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <div style={{ flex: 2, minWidth: 320, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #ffd6e6', padding: 24 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #ffe4ec', color: '#b94e7c', fontWeight: 700 }}>
                <th style={{ textAlign: 'left', padding: 8 }}>SẢN PHẨM</th>
                <th style={{ padding: 8 }}>GIÁ</th>
                <th style={{ padding: 8 }}>SỐ LƯỢNG</th>
                <th style={{ padding: 8 }}>TỔNG</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.length === 0 ? (
                <tr>
                  <td colSpan={5} style={{ textAlign: 'center', color: '#b94e7c', padding: 32 }}>
                    Giỏ hàng trống
                  </td>
                </tr>
              ) : cart.map(item => (
                <tr key={item.productId} style={{ borderBottom: '1px solid #f5e6ef' }}>
                  <td style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 8 }}>
                    <img src={item.imageUrl} alt={item.productName} style={{
                      width: 60, height: 60, borderRadius: 8, objectFit: 'cover', background: '#ffe4ec'
                    }} />
                    <span style={{ fontWeight: 600, color: '#e14b85' }}>{item.productName}</span>
                  </td>
                  <td style={{ textAlign: 'center', color: '#b94e7c', fontWeight: 600 }}>
                    {item.discount > 0 ? (
                      <>
                        <span style={{ textDecoration: 'line-through', color: '#bbb', fontSize: 14, marginRight: 6 }}>
                          {item.price.toLocaleString('vi-VN')}đ
                        </span>
                        <span>
                          {(item.price * (1 - item.discount / 100)).toLocaleString('vi-VN')}đ
                        </span>
                      </>
                    ) : (
                      <span>{item.price.toLocaleString('vi-VN')}đ</span>
                    )}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <div style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8
                    }}>
                      <button
                        style={{
                          width: 28, height: 28, borderRadius: '50%', border: '1px solid #e14b85',
                          background: '#fff', color: '#e14b85', fontWeight: 700, cursor: 'pointer'
                        }}
                        onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >-</button>
                      <span style={{ minWidth: 24, textAlign: 'center', fontWeight: 600 }}>{item.quantity}</span>
                      <button
                        style={{
                          width: 28, height: 28, borderRadius: '50%', border: '1px solid #e14b85',
                          background: '#fff', color: '#e14b85', fontWeight: 700, cursor: 'pointer'
                        }}
                        onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                      >+</button>
                    </div>
                  </td>
                  <td style={{ textAlign: 'center', color: '#e14b85', fontWeight: 700 }}>
                    {((item.price * (1 - item.discount / 100)) * item.quantity).toLocaleString('vi-VN')}đ
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <button
                      style={{
                        background: 'none', border: 'none', color: '#e14b85', fontSize: 20, cursor: 'pointer'
                      }}
                      title="Xóa khỏi giỏ hàng"
                      onClick={() => removeFromCart(item.productId)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{
          flex: 1,
          minWidth: 260,
          background: '#fff',
          borderRadius: 12,
          boxShadow: '0 2px 8px #ffd6e6',
          padding: 24,
          height: 'fit-content'
        }}>
          <h3 style={{ color: '#222', fontWeight: 700, fontSize: 20, marginBottom: 18, borderBottom: '2px solid #ffe4ec', paddingBottom: 10 }}>
            ĐƠN HÀNG
          </h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, fontSize: 17, marginBottom: 18 }}>
            <span>Tổng số tiền:</span>
            <span>{total.toLocaleString('vi-VN')}đ</span>
          </div>
          <Link to="/checkout">
            <button style={{
              width: '100%',
              padding: '13px 0',
              borderRadius: 24,
              border: 'none',
              fontWeight: 700,
              fontSize: 17,
              cursor: 'pointer',
              background: 'linear-gradient(90deg, #ffb6d5 0%, #e14b85 100%)',
              color: '#fff',
              boxShadow: '0 2px 8px #ffd6e6',
              marginBottom: 12
            }}>
              Đi Đến Trang Thanh Toán
            </button>
          </Link>
          <Link to="/products">
            <button style={{
              width: '100%',
              padding: '13px 0',
              borderRadius: 24,
              border: '2px solid #e14b85',
              fontWeight: 700,
              fontSize: 17,
              cursor: 'pointer',
              background: '#fff',
              color: '#e14b85'
            }}>
              Tiếp Tục Mua Sắm
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}