import React from 'react';

export default function About() {
  return (
    <div style={{background: '#fff', minHeight: '100vh'}}>
      {/* Header */}
      <div style={{textAlign: 'center', margin: '40px 0 32px'}}>
        <span style={{background: '#222', color: '#fff', fontWeight: 700, fontSize: 24, padding: '6px 24px', borderRadius: 8, letterSpacing: 1}}>Về ZenPETs</span>
      </div>

      {/* Info grid */}
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: 48, flexWrap: 'wrap', marginBottom: 32}}>
        {/* Logo lớn */}
        <div style={{flex: '0 0 220px', textAlign: 'center'}}>
          <img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" alt="ZenPETs logo" style={{width: 180, borderRadius: 24, background: 'linear-gradient(135deg,#f9b6d1,#fff)'}} />
        </div>
        {/* Thông tin */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18, minWidth: 260, alignItems: 'center'}}>
          <div style={{fontWeight: 600}}>Thành lập</div>
          <div>2025</div>
          <div style={{fontWeight: 600}}>Thành viên</div>
          <div>20+</div>
          <div style={{fontWeight: 600}}>Mục đích</div>
          <div>Định vị & chăm sóc thú cưng</div>
          <div style={{fontWeight: 600}}>Sứ mệnh</div>
          <div>Tiên phong công nghệ pet tại VN</div>
        </div>
      </div>

      {/* Slogan/giới thiệu startup */}
      <div style={{textAlign: 'center', fontWeight: 700, fontSize: 18, marginBottom: 8}}>
        Startup công nghệ thú cưng tại VN
      </div>
      <div style={{textAlign: 'center', fontSize: 16, color: '#444', marginBottom: 32}}>
        Tiên phong đi đầu trong công nghệ hỗ trợ chăm sóc thú cưng tại Việt Nam
      </div>

      {/* Đoạn mô tả dài */}
      <div style={{display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap', marginBottom: 48}}>
        <div style={{flex: '0 0 320px', height: 160, background: '#eee', borderRadius: 12}}></div>
        <div style={{flex: '1 1 320px', maxWidth: 540, color: '#222', fontSize: 16, lineHeight: 1.7}}>
          ZenPETs là startup tiên phong trong lĩnh vực công nghệ dành cho thú cưng tại Việt Nam. Chúng tôi cung cấp các giải pháp định vị GPS, chăm sóc sức khỏe, dịch vụ spa, khách sạn và huấn luyện thú cưng hiện đại, an toàn, tiện lợi. Đội ngũ ZenPETs gồm các chuyên gia công nghệ, bác sĩ thú y và những người yêu động vật, luôn nỗ lực mang đến trải nghiệm tốt nhất cho thú cưng và chủ nuôi.
          <br /><br />
          Sứ mệnh của chúng tôi là ứng dụng công nghệ để nâng cao chất lượng sống cho thú cưng, giúp chủ nuôi an tâm và gắn kết hơn với "người bạn nhỏ" của mình. ZenPETs không ngừng đổi mới, hợp tác cùng các đối tác lớn trong và ngoài nước để phát triển hệ sinh thái dịch vụ toàn diện cho thú cưng tại Việt Nam.
        </div>
      </div>

      {/* Đối tác */}
      <div style={{maxWidth: 900, margin: '0 auto 48px'}}>
        <div style={{fontWeight: 700, fontSize: 20, marginBottom: 12}}>Đối tác</div>
        <div style={{display: 'flex', gap: 32, flexWrap: 'wrap', alignItems: 'center'}}>
          <div style={{flex: 1, minWidth: 220, color: '#444', fontSize: 15}}>
            ZenPETs tự hào hợp tác với các doanh nghiệp, tổ chức và chuyên gia hàng đầu trong lĩnh vực thú cưng, công nghệ và chăm sóc sức khỏe. Chúng tôi luôn mở rộng mạng lưới đối tác để mang lại giá trị tốt nhất cho khách hàng và cộng đồng thú cưng Việt Nam.
          </div>
          <div style={{flex: '0 0 220px', height: 120, background: '#eee', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            {/* Logo đối tác mẫu */}
            <img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" alt="Partner logo" style={{width: 80, borderRadius: 16, background: '#fff'}} />
          </div>
        </div>
      </div>
    </div>
  );
} 