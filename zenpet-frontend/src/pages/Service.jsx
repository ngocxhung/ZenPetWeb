import React from 'react';

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
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fff 0%, #f8f6fa 100%)',
      padding: '40px 20px'
    }}>
      {/* Header */}
      <div style={{textAlign: 'center', marginBottom: 48}}>
        <h1 style={{
          fontSize: 36,
          fontWeight: 800,
          color: '#222',
          marginBottom: 16,
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
        }}>
          Dịch Vụ Của Chúng Tôi
        </h1>
        <p style={{
          fontSize: 18,
          color: '#666',
          maxWidth: 600,
          margin: '0 auto',
          lineHeight: 1.6
        }}>
          ZenPETs cung cấp đa dạng dịch vụ chăm sóc thú cưng chất lượng cao, 
          giúp người bạn nhỏ của bạn luôn khỏe mạnh và hạnh phúc
        </p>
      </div>

      {/* Services Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 32,
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 20px'
      }}>
        {services.map((service, index) => (
          <div
            key={service.title}
            style={{
              background: '#fff',
              borderRadius: 20,
              padding: 32,
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              ':hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
              }
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
            }}
          >
            <div style={{
              fontSize: 48,
              marginBottom: 20,
              display: 'inline-block',
              padding: 16,
              borderRadius: 16,
              background: 'linear-gradient(135deg, #f9b6d1 0%, #ffd6e0 100%)',
              boxShadow: '0 4px 15px rgba(212,106,146,0.2)'
            }}>
              {service.icon}
            </div>
            <h3 style={{
              fontSize: 24,
              fontWeight: 700,
              color: '#222',
              marginBottom: 16
            }}>
              {service.title}
            </h3>
            <p style={{
              fontSize: 16,
              color: '#666',
              lineHeight: 1.6,
              marginBottom: 24
            }}>
              {service.description}
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 8
            }}>
              {service.features.map(feature => (
                <span
                  key={feature}
                  style={{
                    background: '#f8f6fa',
                    padding: '8px 16px',
                    borderRadius: 20,
                    fontSize: 14,
                    color: '#d46a92',
                    fontWeight: 500
                  }}
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div style={{
        textAlign: 'center',
        marginTop: 64,
        padding: '48px 20px',
        background: 'linear-gradient(135deg, #d46a92 0%, #f9b6d1 100%)',
        borderRadius: 24,
        maxWidth: 800,
        margin: '64px auto 0',
        color: '#fff'
      }}>
        <h2 style={{
          fontSize: 32,
          fontWeight: 700,
          marginBottom: 16
        }}>
          Sẵn sàng chăm sóc thú cưng của bạn?
        </h2>
        <p style={{
          fontSize: 18,
          marginBottom: 32,
          opacity: 0.9
        }}>
          Đăng ký ngay để nhận ưu đãi đặc biệt cho lần sử dụng dịch vụ đầu tiên
        </p>
        <button
          style={{
            background: '#fff',
            color: '#d46a92',
            border: 'none',
            padding: '16px 32px',
            borderRadius: 30,
            fontSize: 18,
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
          }}
          onMouseOver={e => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
          }}
        >
          Đăng Ký Ngay
        </button>
      </div>
    </div>
  );
} 