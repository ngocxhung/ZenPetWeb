import React from 'react';
import './Service.css';

const services = [
  {
    title: 'Định vị GPS',
    icon: '📍',
    description: 'Theo dõi vị trí thú cưng 24/7 với độ chính xác cao, thông báo khi thú cưng ra khỏi khu vực an toàn.',
    features: ['Định vị chính xác', 'Thông báo realtime', 'Lịch sử di chuyển', 'Khu vực an toàn']
  },
  {
    title: 'Chăm sóc sức khỏe',
    icon: '💊',
    description: 'Dịch vụ khám chữa bệnh, tiêm phòng, tư vấn dinh dưỡng với đội ngũ bác sĩ thú y chuyên nghiệp.',
    features: ['Khám tổng quát', 'Tiêm phòng', 'Tư vấn dinh dưỡng', 'Cấp cứu 24/7']
  },
  {
    title: 'Spa & Grooming',
    icon: '✨',
    description: 'Dịch vụ làm đẹp, cắt tỉa lông, tắm rửa chuyên nghiệp giúp thú cưng luôn xinh đẹp và khỏe mạnh.',
    features: ['Cắt tỉa lông', 'Tắm rửa', 'Massage', 'Chăm sóc móng']
  },
  {
    title: 'Khách sạn thú cưng',
    icon: '🏨',
    description: 'Dịch vụ lưu trú cao cấp với đầy đủ tiện nghi, chăm sóc 24/7 khi bạn vắng nhà.',
    features: ['Phòng riêng biệt', 'Chăm sóc 24/7', 'Báo cáo hàng ngày', 'Dịch vụ đặc biệt']
  },
  {
    title: 'Huấn luyện',
    icon: '🎓',
    description: 'Khóa học huấn luyện chuyên nghiệp giúp thú cưng ngoan ngoãn, biết nghe lời và thực hiện các mệnh lệnh.',
    features: ['Huấn luyện cơ bản', 'Huấn luyện nâng cao', 'Sửa tật xấu', 'Tư vấn hành vi']
  },
  {
    title: 'Tư vấn trực tuyến',
    icon: '💬',
    description: 'Dịch vụ tư vấn trực tuyến 24/7 với đội ngũ chuyên gia giàu kinh nghiệm.',
    features: ['Tư vấn miễn phí', 'Hỗ trợ 24/7', 'Video call', 'Chat trực tuyến']
  }
];

export default function Service() {
  return (
    <div className="zenpet-service-page">
      <div className="zenpet-service-header">
        <h1>Dịch Vụ & Sản Phẩm Nổi Bật</h1>
        <p>ZenPETs cung cấp đa dạng dịch vụ chăm sóc thú cưng chất lượng cao, cùng sản phẩm công nghệ hiện đại giúp bạn an tâm và thú cưng luôn khỏe mạnh, hạnh phúc.</p>
      </div>

      {/* Sản phẩm nổi bật: Vòng định vị GPS ZenPETs & Ứng dụng đi kèm */}
      <section className="zenpet-product-feature">
        <div className="zenpet-product-feature-img">
          <img src={require('../assets/product.png')} alt="Vòng định vị GPS ZenPETs" />
        </div>
        <div className="zenpet-product-feature-info">
          <h2>Vòng định vị GPS ZenPETs</h2>
          <p>
            <b>Vòng định vị GPS ZenPETs</b> là thiết bị thông minh giúp bạn theo dõi vị trí, sức khỏe và hoạt động của thú cưng mọi lúc, mọi nơi. Kết nối trực tiếp với <b>ứng dụng ZenPETs</b> trên điện thoại, bạn sẽ nhận được cảnh báo khi thú cưng ra khỏi vùng an toàn, xem lịch sử di chuyển, đo vận động, nhịp tim, nhiệt độ và nhiều chỉ số sức khỏe khác.
          </p>
          <ul className="zenpet-product-feature-list">
            <li>Định vị GPS chính xác, realtime 24/7</li>
            <li>Cảnh báo khi thú cưng ra khỏi khu vực an toàn</li>
            <li>Theo dõi sức khỏe: vận động, nhịp tim, nhiệt độ</li>
            <li>Lưu trữ lịch sử di chuyển, báo cáo qua app</li>
            <li>Pin lâu, chống nước, thiết kế nhỏ gọn, an toàn</li>
            <li>Kết nối ứng dụng ZenPETs: quản lý nhiều thú cưng, chia sẻ cho gia đình</li>
          </ul>
          <div className="zenpet-product-feature-services">
            <b>Dịch vụ đi kèm:</b>
            <ul>
              <li>Hỗ trợ lắp đặt, hướng dẫn sử dụng tận nơi</li>
              <li>Bảo hành 1 đổi 1 trong 12 tháng</li>
              <li>Tư vấn sức khỏe, dinh dưỡng miễn phí qua app</li>
              <li>Chăm sóc, cứu hộ thú cưng 24/7 (gói mở rộng)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Dịch vụ khác */}
      <div className="zenpet-service-header" style={{marginTop: 48}}>
        <h2>Dịch vụ chăm sóc toàn diện</h2>
        <p>Chúng tôi mang đến giải pháp "tất cả trong một" cho thú cưng: từ sức khỏe, làm đẹp, lưu trú đến huấn luyện và tư vấn chuyên sâu.</p>
      </div>
      <div className="zenpet-service-grid">
        {services.map((service, index) => (
          <div className="zenpet-service-card" key={service.title}>
            <div className="zenpet-service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="zenpet-service-features">
              {service.features.map(feature => (
                <span key={feature}>{feature}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
} 