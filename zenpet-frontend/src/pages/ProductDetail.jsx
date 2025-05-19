import React, { useState } from 'react';

const mockProduct = {
  id: 1,
  name: 'Sunnyside',
  desc: 'Thiết bị định vị thú cưng thông minh, chống nước, pin lâu, tích hợp app quản lý.',
  detail: 'Sản phẩm giúp bạn theo dõi vị trí thú cưng mọi lúc mọi nơi, cảnh báo khi thú cưng ra khỏi vùng an toàn, tích hợp nhiều tính năng chăm sóc sức khoẻ.',
  price: 590000,
  options: [
    { id: 'opt1', label: 'Option 1' },
    { id: 'opt2', label: 'Option 2' },
  ],
  stores: [
    { id: 'store1', name: 'Store 1' },
    { id: 'store2', name: 'Store 2' },
    { id: 'store3', name: 'Store 3' },
  ],
};

export default function ProductDetail() {
  const [deliveryDate, setDeliveryDate] = useState('');
  const [store, setStore] = useState('');
  const [option, setOption] = useState('opt1');

  return (
    <div style={{background: '#f6f6f6', minHeight: '100vh'}}>
      <div style={{maxWidth: 1000, margin: '0 auto', padding: '32px 0'}}>
        <div style={{fontSize: 15, color: '#888', marginBottom: 12}}>Home {'>'} Flowers {'>'} Mixed</div>
        <div style={{display: 'flex', gap: 32, flexWrap: 'wrap'}}>
          <div style={{flex: '0 0 320px', background: '#eee', borderRadius: 12, height: 320, marginBottom: 16}}></div>
          <div style={{flex: '1 1 320px', maxWidth: 500}}>
            <div style={{fontWeight: 700, fontSize: 28, marginBottom: 18}}>{mockProduct.name}</div>
            <div style={{marginBottom: 16}}>
              <label style={{fontWeight: 600}}>Delivery Date</label><br />
              <input type="date" value={deliveryDate} onChange={e => setDeliveryDate(e.target.value)} style={{padding: '6px 12px', borderRadius: 6, border: '1px solid #ccc', marginTop: 4}} />
            </div>
            <div style={{marginBottom: 16}}>
              <label style={{fontWeight: 600}}>Where are you sending this?</label><br />
              {mockProduct.stores.map(s => (
                <button key={s.id} onClick={() => setStore(s.id)} style={{display: 'block', width: '100%', margin: '6px 0', padding: '10px', borderRadius: 8, border: store===s.id?'2px solid #d46a92':'1px solid #ccc', background: store===s.id?'#f9b6d1':'#fff', fontWeight: 500, cursor: 'pointer'}}>{s.name}</button>
              ))}
            </div>
            <div style={{marginBottom: 18}}>
              <label style={{fontWeight: 600}}>Purchasing Options</label><br />
              {mockProduct.options.map(opt => (
                <button key={opt.id} onClick={() => setOption(opt.id)} style={{display: 'block', width: '100%', margin: '6px 0', padding: '10px', borderRadius: 8, border: option===opt.id?'2px solid #d46a92':'1px solid #ccc', background: option===opt.id?'#f9b6d1':'#fff', fontWeight: 500, cursor: 'pointer'}}>{opt.label}</button>
              ))}
            </div>
            <button style={{width: '100%', background: '#222', color: '#fff', border: 'none', borderRadius: 8, padding: '14px 0', fontWeight: 700, fontSize: 18, marginBottom: 18, cursor: 'pointer'}}>Add to basket</button>
            <div style={{fontSize: 15, color: '#444', marginBottom: 12}}>{mockProduct.desc}</div>
            <div style={{fontSize: 15, color: '#444'}}>{mockProduct.detail}</div>
          </div>
        </div>
      </div>
    </div>
  );
} 