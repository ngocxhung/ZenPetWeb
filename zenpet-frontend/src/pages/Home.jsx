import React, { useState, useEffect } from 'react';
import './Home.css';

const bannerImages = [
  require('../assets/banner1.jpg'),
  require('../assets/banner2.jpg'),
  require('../assets/banner3.jpg'),
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % bannerImages.length), 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="zenpet-homepage-layout">
      {/* Banner Carousel */}
      {/* Đã xóa banner carousel theo yêu cầu */}
      {/* Hero Section */}
      <section className="zenpet-hero">
        <div className="zenpet-hero-content">
          <h1>Chăm sóc thú cưng thông minh & tận tâm</h1>
          <p>ZenPETs – Nền tảng ứng dụng AI & công nghệ hiện đại vào chăm sóc, dinh dưỡng, sức khỏe và an toàn cho thú cưng.</p>
          <a href="#services" className="zenpet-cta-btn">Khám phá ngay</a>
        </div>
        <div className="zenpet-hero-img" />
      </section>
      {/* Services Section */}
      <section className="zenpet-section" id="services">
        <h2 className="zenpet-section-title">Dịch vụ nổi bật</h2>
        <div className="zenpet-services-list">
          <div className="zenpet-service-card"><span>🐾</span><h3>Spa & Grooming</h3><p>Làm đẹp, vệ sinh, chăm sóc lông da chuyên nghiệp.</p></div>
          <div className="zenpet-service-card"><span>🏨</span><h3>Khách sạn thú cưng</h3><p>Lưu trú an toàn, tiện nghi, giám sát 24/7.</p></div>
          <div className="zenpet-service-card"><span>🎓</span><h3>Huấn luyện</h3><p>Đào tạo, chỉnh hành vi, phát triển kỹ năng cho thú cưng.</p></div>
          <div className="zenpet-service-card"><span>💡</span><h3>Thiết bị thông minh</h3><p>Vòng định vị, camera, cảm biến sức khỏe hiện đại.</p></div>
          <div className="zenpet-service-card"><span>🥗</span><h3>Tư vấn dinh dưỡng</h3><p>Chế độ ăn cá nhân hóa, tư vấn bởi chuyên gia.</p></div>
        </div>
      </section>
      {/* 3 Steps Section */}
      <section className="zenpet-section">
        <h2 className="zenpet-section-title">Chỉ 3 bước đơn giản</h2>
        <div className="zenpet-steps-list">
          <div className="zenpet-step-card"><span>📝</span><h3>Đăng ký/Đặt lịch</h3><p>Chọn dịch vụ, điền thông tin, xác nhận nhanh chóng.</p></div>
          <div className="zenpet-step-card"><span>🧑‍⚕️</span><h3>Chăm sóc tận nơi</h3><p>Đội ngũ chuyên nghiệp đến tận nhà hoặc tại hệ thống ZenPETs.</p></div>
          <div className="zenpet-step-card"><span>📲</span><h3>Theo dõi & nhận báo cáo</h3><p>Cập nhật tình trạng, nhận báo cáo sức khỏe, hình ảnh thú cưng.</p></div>
        </div>
      </section>
      {/* Testimonial Section */}
      <section className="zenpet-section">
        <h2 className="zenpet-section-title">Khách hàng nói gì về ZenPETs?</h2>
        <div className="zenpet-testimonial-list">
          <div className="zenpet-testimonial-card">
            <div className="zenpet-testimonial-avatar">🐶</div>
            <div>
              <p>"Dịch vụ tuyệt vời, nhân viên tận tâm, thú cưng của tôi rất hài lòng!"</p>
              <span>- Chị Lan, Hà Nội</span>
            </div>
          </div>
          <div className="zenpet-testimonial-card">
            <div className="zenpet-testimonial-avatar">🐱</div>
            <div>
              <p>"Ứng dụng AI giúp tôi yên tâm theo dõi sức khỏe boss mọi lúc!"</p>
              <span>- Anh Minh, TP.HCM</span>
            </div>
          </div>
        </div>
      </section>
      {/* Partners Section */}
      <section className="zenpet-section zenpet-partners">
        <h2 className="zenpet-section-title">Đối tác của chúng tôi</h2>
        <div className="zenpet-partner-logos">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png" alt="Apple" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png" alt="Google" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" />
        </div>
      </section>
    </div>
  );
} 