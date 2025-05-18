import React from 'react';

const bgImg =
  'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=1200&q=80'; // Ảnh chó đẹp, có thể thay bằng ảnh vòng định vị thực tế
const productImg =
  'https://media.istockphoto.com/id/1322277512/vector/smart-pet-collar-landscape-poster-dog-tech-gadgets-gps-trackers-for-dogs.jpg?s=612x612&w=0&k=20&c=6Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw1Qw=';

const socialIcons = [
  { href: '#', icon: 'fab fa-facebook-f', label: 'Facebook' },
  { href: '#', icon: 'fab fa-instagram', label: 'Instagram' },
  { href: '#', icon: 'fab fa-twitter', label: 'Twitter' },
  { href: '#', icon: 'fab fa-tiktok', label: 'TikTok' },
];

export default function BannerSection() {
  return (
    <section
      style={{
        width: '100vw',
        minHeight: 420,
        background: `url(${bgImg}) center/cover no-repeat`,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        color: '#fff',
        boxShadow: '0 4px 32px #0002',
        overflow: 'hidden',
      }}
    >
      {/* Overlay để tăng độ tương phản */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(44,28,7,0.85) 0%, rgba(44,28,7,0.5) 60%, rgba(44,28,7,0.1) 100%)',
          zIndex: 1,
        }}
      />
      {/* Nội dung trái */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          flex: 1.2,
          padding: '0 2vw 0 6vw',
          minWidth: 320,
          marginRight: 32,
        }}
      >
        <h1 style={{ fontSize: 44, fontWeight: 800, marginBottom: 18, lineHeight: 1.1 }}>
          Vòng định vị thú cưng <span style={{ color: '#ffd966' }}>ZenPet</span>
        </h1>
        <p style={{ fontSize: 20, maxWidth: 480, marginBottom: 32, textShadow: '0 2px 8px #0008' }}>
          Bảo vệ và kết nối thú cưng của bạn mọi lúc, mọi nơi với công nghệ GPS thông minh, an toàn tuyệt đối.
        </p>
        <button
          style={{
            background: '#ffd966',
            color: '#7c4a03',
            border: 'none',
            borderRadius: 24,
            padding: '14px 38px',
            fontWeight: 700,
            fontSize: 20,
            boxShadow: '0 2px 12px #0003',
            cursor: 'pointer',
            letterSpacing: 1,
          }}
        >
          Khám phá ngay
        </button>
      </div>
      {/* Ảnh sản phẩm bên phải */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minWidth: 320,
        }}
      >
        <img
          src={productImg}
          alt="Vòng định vị ZenPet"
          style={{
            width: 320,
            maxWidth: '90%',
            borderRadius: 24,
            boxShadow: '0 4px 32px #0005',
            background: '#fff',
            border: '6px solid #ffd966',
          }}
        />
      </div>
      {/* Icon mạng xã hội dọc bên phải */}
      <div
        style={{
          position: 'absolute',
          right: 24,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          gap: 18,
        }}
      >
        {socialIcons.map((s, i) => (
          <a
            key={i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            style={{ color: '#ffd966', fontSize: 26, margin: 0, textShadow: '0 2px 8px #0008' }}
          >
            <i className={s.icon}></i>
          </a>
        ))}
      </div>
      {/* FontAwesome CDN cho icon mạng xã hội */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
    </section>
  );
} 