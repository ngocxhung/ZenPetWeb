import React from 'react';
import './News.css';

const newsList = [
  {
    title: '5 mẹo chăm sóc thú cưng mùa hè',
    date: '2024-06-01',
    img: require('../assets/banner1.jpg'),
    desc: 'Giúp thú cưng luôn khỏe mạnh, mát mẻ và an toàn trong những ngày nắng nóng.'
  },
  {
    title: 'AI thay đổi cách nuôi thú cưng',
    date: '2024-05-20',
    img: require('../assets/banner2.jpg'),
    desc: 'Công nghệ AI giúp cá nhân hóa chế độ dinh dưỡng, theo dõi sức khỏe thú cưng.'
  },
  {
    title: 'Top 3 khách sạn thú cưng tại Hà Nội',
    date: '2024-05-10',
    img: require('../assets/banner3.jpg'),
    desc: 'Khám phá các địa chỉ lưu trú thú cưng uy tín, tiện nghi, an toàn.'
  }
];

export default function News() {
  return (
    <div className="zenpet-news-page">
      <div className="zenpet-news-header">Tin tức mới nhất</div>
      <div className="zenpet-news-list">
        {newsList.map((news, idx) => (
          <div className="zenpet-news-card" key={news.title}>
            <img src={news.img} alt={news.title} />
            <div className="zenpet-news-content">
              <div className="zenpet-news-date">{news.date}</div>
              <h3>{news.title}</h3>
              <p>{news.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 