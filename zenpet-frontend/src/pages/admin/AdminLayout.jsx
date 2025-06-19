import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const sidebarLinks = [
  { to: '/admin/emails', label: 'Quản lý Email' },
  { to: '/admin/orders', label: 'Quản lý Đơn hàng' },
  { to: '/admin/products', label: 'Quản lý Sản phẩm' },
  { to: '/admin/categories', label: 'Quản lý Danh mục' },
];

export default function AdminLayout() {
  const location = useLocation();
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f8f8fa' }}>
      <aside style={{
        width: 220,
        background: 'linear-gradient(180deg, #ffe4ec 0%, #e14b85 100%)',
        borderRight: '1px solid #ffe4ec',
        padding: '32px 0',
        boxShadow: '2px 0 8px #ffd6e6',
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }}>
        <div style={{ fontWeight: 800, fontSize: 22, color: '#fff', textAlign: 'center', marginBottom: 32, textShadow: '0 2px 8px #e14b85' }}>
          Admin ZenPETs
        </div>
        {sidebarLinks.map(link => (
          <Link
            key={link.to}
            to={link.to}
            style={{
              display: 'block',
              padding: '12px 32px',
              color: location.pathname === link.to ? '#e14b85' : '#fff',
              background: location.pathname === link.to ? '#fff' : 'transparent',
              borderRadius: 8,
              fontWeight: 600,
              textDecoration: 'none',
              margin: '0 12px',
              marginBottom: 4,
              transition: 'background 0.2s, color 0.2s',
              boxShadow: location.pathname === link.to ? '0 2px 8px #ffd6e6' : 'none',
            }}
          >
            {link.label}
          </Link>
        ))}
      </aside>
      <main style={{ flex: 1, padding: 40 }}>
        <Outlet />
      </main>
    </div>
  );
} 