import React, { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
  const ref = useRef();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) setShow(true);
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section style={{padding: '48px 0', background: '#fff7e6'}}>
      <div ref={ref} style={{
        maxWidth: 900,
        margin: '0 auto',
        display: 'flex',
        gap: 40,
        alignItems: 'center',
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(60px)',
        transition: 'all 0.7s cubic-bezier(.4,1.3,.6,1)',
      }}>
        <div style={{flex: 1}}>
          <h2 style={{color: '#7c4a03'}}>Về ZenPet</h2>
          <p style={{fontSize: 17, color: '#7c4a03'}}>
            <b>ZenPet</b> là doanh nghiệp tiên phong chuyên cung cấp <b>vòng định vị thú cưng</b> và các dịch vụ chăm sóc toàn diện. Chúng tôi kết nối cộng đồng yêu thú cưng, mang đến giải pháp bảo vệ, chăm sóc và đồng hành cùng thú cưng của bạn.
          </p>
          <ul style={{color: '#7c4a03', fontSize: 15, margin: '18px 0 0 18px'}}>
            <li>Vòng định vị GPS thông minh</li>
            <li>Spa, khách sạn, huấn luyện thú cưng</li>
            <li>Đội ngũ chuyên gia tận tâm</li>
          </ul>
        </div>
        <div style={{flex: 1, textAlign: 'center'}}>
          <img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" alt="Team" style={{width: 140, background: '#ffe4ec', borderRadius: '50%'}} />
          <div style={{marginTop: 8, color: '#7c4a03'}}>Đội ngũ ZenPet</div>
        </div>
      </div>
    </section>
  );
} 