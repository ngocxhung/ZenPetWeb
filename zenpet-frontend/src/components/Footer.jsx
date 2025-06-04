import React from 'react';

const footerLinks = [
  {
    title: 'ZenPETs',
    links: ['Về chúng tôi', 'Tin tức', 'Câu chuyện', 'Blog', 'Liên hệ']
  },
  {
    title: 'Services',
    links: ['Vòng định vị', 'Spa & Grooming', 'Huấn luyện', 'Khách sạn thú cưng', 'Bảo hành']
  },
  {
    title: 'Work With Us',
    links: ['Tuyển dụng', 'Cộng tác viên', 'Đối tác', 'Nhà cung cấp']
  },
  {
    title: 'Store Locations',
    links: ['Hà Nội', 'TP.HCM', 'Đà Nẵng', 'Cần Thơ']
  },
  {
    title: 'Help',
    links: ['Hỏi đáp', 'Chính sách đổi trả', 'Chính sách bảo mật', 'Hỗ trợ khách hàng']
  },
  {
    title: 'Local',
    links: ['Cộng đồng', 'Sự kiện', 'Hội nhóm', 'Chia sẻ kinh nghiệm']
  }
];

const socialIcons = [
  { href: '#', icon: 'fab fa-facebook-f', label: 'Facebook', color: '#e14b85' },
  { href: '#', icon: 'fab fa-instagram', label: 'Instagram', color: '#e14b85' },
  { href: '#', icon: 'fab fa-youtube', label: 'YouTube', color: '#e14b85' },
  { href: '#', icon: 'fab fa-tiktok', label: 'TikTok', color: '#e14b85' },
];

export default function Footer() {
  return (
    <footer style={{background: 'linear-gradient(90deg, #fff 60%, #ffe4ec 100%)', color: '#e14b85', fontSize: 15, marginTop: 40, boxShadow: '0 -2px 12px #ffd6e6'}}>
      {/* Phần trên */}
      <div style={{maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 32, flexWrap: 'wrap', padding: '36px 16px 18px'}}>
        {/* Logo + mô tả */}
        <div style={{flex: 1, minWidth: 220, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <img src={require('../assets/logo.png')} alt="ZenPet Logo" style={{width: 54, background: 'none', borderRadius: '50%', marginBottom: 10}} />
          <div style={{textAlign: 'center', color: '#e14b85', maxWidth: 200}}>
            ZenPet - Giải pháp định vị và chăm sóc thú cưng toàn diện, an toàn, hiện đại.
          </div>
        </div>
        {/* Nhận ưu đãi */}
        <div style={{flex: 1.2, minWidth: 260, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div style={{fontWeight: 700, fontSize: 18, marginBottom: 10, color: '#e14b85'}}>Nhận ưu đãi ngay</div>
          <form style={{display: 'flex', alignItems: 'center', width: '100%', maxWidth: 320, background: '#fff', borderRadius: 24, boxShadow: '0 2px 8px #ffd6e6', padding: 4}}>
            <input type="email" placeholder="Nhập email của bạn" style={{border: 'none', outline: 'none', padding: '10px 16px', borderRadius: 24, fontSize: 15, flex: 1, background: 'transparent', color: '#e14b85'}} />
            <button type="submit" style={{background: '#e14b85', color: '#fff', border: 'none', borderRadius: '50%', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, marginLeft: 6, cursor: 'pointer'}}>
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
        {/* Mạng xã hội */}
        <div style={{flex: 1, minWidth: 220, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div style={{fontWeight: 700, fontSize: 18, marginBottom: 10, color: '#e14b85'}}>Kết nối với chúng tôi</div>
          <div style={{display: 'flex', gap: 16, marginBottom: 10}}>
            {socialIcons.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} style={{color: s.color, fontSize: 26, background: '#ffe4ec', border: '2px solid #e14b85', borderRadius: '50%', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px #ffd6e6'}}>
                <i className={s.icon}></i>
              </a>
            ))}
          </div>
          <div style={{textAlign: 'center', color: '#e14b85', maxWidth: 200, fontSize: 14}}>
            Theo dõi ZenPet để nhận thông tin mới nhất về sản phẩm và ưu đãi.
          </div>
        </div>
      </div>
      {/* Grid link dưới cùng */}
      <div style={{maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px,1fr))', gap: 24, borderTop: '1px solid #ffb6d5', padding: '24px 16px 12px'}}>
        {footerLinks.map((col, idx) => (
          <div key={idx}>
            <div style={{fontWeight: 700, marginBottom: 8, fontSize: 16, color: '#e14b85'}}>{col.title}</div>
            {col.links.map((l, i) => (
              <a key={i} href="#" style={{display: 'block', color: '#e14b85', textDecoration: 'none', margin: '4px 0', fontSize: 15}}>{l}</a>
            ))}
          </div>
        ))}
      </div>
      {/* FontAwesome CDN cho icon */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    </footer>
  );
} 