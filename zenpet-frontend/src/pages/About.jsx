import React from 'react';
import './About.css';

const infoItems = [
  { label: 'Thành lập', value: '2025', icon: '🎉' },
  { label: 'Thành viên', value: '20+', icon: '👥' },
  { label: 'Mục đích', value: 'Định vị & chăm sóc thú cưng', icon: '📍' },
  { label: 'Sứ mệnh', value: 'Tiên phong công nghệ pet tại VN', icon: '🚀' },
];

export default function About() {
  return (
    <div className="zenpet-about-page">
      <div className="zenpet-about-header">
        <span>Về ZenPETs</span>
      </div>
      <div className="zenpet-about-info">
        <div className="zenpet-about-logo">
          <img src={require('../assets/logo.png')} alt="ZenPETs logo" />
        </div>
        <div className="zenpet-about-info-list">
          {infoItems.map((item, idx) => (
            <div className="zenpet-about-info-card" key={item.label}>
              <span className="zenpet-about-info-icon">{item.icon}</span>
              <span>{item.label}:</span>
              <span className="zenpet-about-info-value">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="zenpet-about-slogan">
        <span role="img" aria-label="pet">🐾</span> Startup công nghệ thú cưng tại VN <span role="img" aria-label="pet">🐾</span>
      </div>
      <div className="zenpet-about-desc">
        <div className="zenpet-about-petimg">🐶</div>
        <blockquote>
          ZenPETs là startup tiên phong trong lĩnh vực công nghệ dành cho thú cưng tại Việt Nam. Chúng tôi cung cấp các giải pháp định vị GPS, chăm sóc sức khỏe, dịch vụ spa, khách sạn và huấn luyện thú cưng hiện đại, an toàn, tiện lợi. Đội ngũ ZenPETs gồm các chuyên gia công nghệ, bác sĩ thú y và những người yêu động vật, luôn nỗ lực mang đến trải nghiệm tốt nhất cho thú cưng và chủ nuôi.
          <br /><br />
          <span className="zenpet-about-highlight">Sứ mệnh</span> của chúng tôi là ứng dụng công nghệ để nâng cao chất lượng sống cho thú cưng, giúp chủ nuôi an tâm và gắn kết hơn với "người bạn nhỏ" của mình. ZenPETs không ngừng đổi mới, hợp tác cùng các đối tác lớn trong và ngoài nước để phát triển hệ sinh thái dịch vụ toàn diện cho thú cưng tại Việt Nam.
        </blockquote>
      </div>
      <div className="zenpet-about-partner">
        <div className="zenpet-about-partner-title">Đối tác</div>
        <div className="zenpet-about-partner-row">
          <div className="zenpet-about-partner-desc">
            ZenPETs tự hào hợp tác với các doanh nghiệp, tổ chức và chuyên gia hàng đầu trong lĩnh vực thú cưng, công nghệ và chăm sóc sức khỏe. Chúng tôi luôn mở rộng mạng lưới đối tác để mang lại giá trị tốt nhất cho khách hàng và cộng đồng thú cưng Việt Nam.
          </div>
          <div className="zenpet-about-partner-logo">
            <img src={require('../assets/logo.png')} alt="Partner logo" />
          </div>
        </div>
      </div>
    </div>
  );
} 