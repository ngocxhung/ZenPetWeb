import React from 'react';

const infoItems = [
  { label: 'Thành lập', value: '2025', icon: '🎉' },
  { label: 'Thành viên', value: '20+', icon: '👥' },
  { label: 'Mục đích', value: 'Định vị & chăm sóc thú cưng', icon: '📍' },
  { label: 'Sứ mệnh', value: 'Tiên phong công nghệ pet tại VN', icon: '🚀' },
];

export default function About() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#fff',
      paddingBottom: 32
    }}>
      {/* Header */}
      <div style={{textAlign: 'center', margin: '40px 0 32px'}}>
        <span style={{
          background: '#222', color: '#fff', fontWeight: 700, fontSize: 28, padding: '10px 36px', borderRadius: 12, letterSpacing: 1,
          boxShadow: '0 4px 18px #d46a9240',
        }}>Về ZenPETs</span>
      </div>

      {/* Info grid */}
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: 48, flexWrap: 'wrap', marginBottom: 32}}>
        {/* Logo lớn */}
        <div style={{flex: '0 0 220px', textAlign: 'center'}}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
            alt="ZenPETs logo"
            style={{
              width: 180,
              borderRadius: 32,
              background: 'linear-gradient(135deg,#fff,#f9b6d1 80%)',
              boxShadow: '0 4px 24px #d46a9240',
              transition: 'transform 0.18s',
              cursor: 'pointer',
            }}
            onMouseOver={e => e.currentTarget.style.transform='scale(1.08)'}
            onMouseOut={e => e.currentTarget.style.transform=''}
          />
        </div>
        {/* Thông tin */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 22, minWidth: 280, alignItems: 'center'}}>
          {infoItems.map((item, idx) => (
            <div key={item.label} style={{
              background: '#fff',
              borderRadius: 14,
              boxShadow: '0 2px 12px #d46a9240',
              padding: '18px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              fontWeight: 600,
              fontSize: 16,
              color: '#d46a92',
              transition: 'box-shadow 0.18s',
            }}>
              <span style={{fontSize: 22}}>{item.icon}</span>
              <span>{item.label}:</span>
              <span style={{color: '#222', fontWeight: 700, marginLeft: 4}}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Slogan/giới thiệu startup */}
      <div style={{textAlign: 'center', fontWeight: 800, fontSize: 22, marginBottom: 10, color: '#d46a92', letterSpacing: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10}}>
        <span role="img" aria-label="pet">🐾</span> Startup công nghệ thú cưng tại VN <span role="img" aria-label="pet">🐾</span>
      </div>
      <div style={{textAlign: 'center', fontSize: 17, color: '#444', marginBottom: 32, fontStyle: 'italic'}}>
        Tiên phong đi đầu trong công nghệ hỗ trợ chăm sóc thú cưng tại Việt Nam
      </div>

      {/* Đoạn mô tả dài */}
      <div style={{display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap', marginBottom: 48}}>
        <div style={{flex: '0 0 320px', height: 180, background: 'linear-gradient(135deg,#fff,#f9b6d1 80%)', borderRadius: 16, boxShadow: '0 2px 12px #d46a9240', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <span style={{fontSize: 60}}>🐶</span>
        </div>
        <blockquote style={{flex: '1 1 320px', maxWidth: 540, color: '#222', fontSize: 17, lineHeight: 1.7, background: '#fff', borderLeft: '6px solid #d46a92', borderRadius: 12, boxShadow: '0 2px 12px #d46a9240', padding: '22px 28px', fontStyle: 'italic'}}>
          ZenPETs là startup tiên phong trong lĩnh vực công nghệ dành cho thú cưng tại Việt Nam. Chúng tôi cung cấp các giải pháp định vị GPS, chăm sóc sức khỏe, dịch vụ spa, khách sạn và huấn luyện thú cưng hiện đại, an toàn, tiện lợi. Đội ngũ ZenPETs gồm các chuyên gia công nghệ, bác sĩ thú y và những người yêu động vật, luôn nỗ lực mang đến trải nghiệm tốt nhất cho thú cưng và chủ nuôi.
          <br /><br />
          <span style={{color: '#d46a92', fontWeight: 700}}>Sứ mệnh</span> của chúng tôi là ứng dụng công nghệ để nâng cao chất lượng sống cho thú cưng, giúp chủ nuôi an tâm và gắn kết hơn với "người bạn nhỏ" của mình. ZenPETs không ngừng đổi mới, hợp tác cùng các đối tác lớn trong và ngoài nước để phát triển hệ sinh thái dịch vụ toàn diện cho thú cưng tại Việt Nam.
        </blockquote>
      </div>

      {/* Đối tác */}
      <div style={{maxWidth: 900, margin: '0 auto 48px'}}>
        <div style={{fontWeight: 700, fontSize: 20, marginBottom: 12, color: '#d46a92'}}>Đối tác</div>
        <div style={{display: 'flex', gap: 32, flexWrap: 'wrap', alignItems: 'center'}}>
          <div style={{flex: 1, minWidth: 220, color: '#444', fontSize: 15}}>
            ZenPETs tự hào hợp tác với các doanh nghiệp, tổ chức và chuyên gia hàng đầu trong lĩnh vực thú cưng, công nghệ và chăm sóc sức khỏe. Chúng tôi luôn mở rộng mạng lưới đối tác để mang lại giá trị tốt nhất cho khách hàng và cộng đồng thú cưng Việt Nam.
          </div>
          <div style={{flex: '0 0 220px', height: 120, background: 'linear-gradient(135deg,#fff,#f9b6d1 80%)', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 12px #d46a9240'}}>
            {/* Logo đối tác mẫu */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
              alt="Partner logo"
              style={{width: 80, borderRadius: 16, background: '#fff', transition: 'transform 0.18s', boxShadow: '0 2px 8px #d46a9240', cursor: 'pointer'}}
              onMouseOver={e => e.currentTarget.style.transform='scale(1.12)'}
              onMouseOut={e => e.currentTarget.style.transform=''}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 