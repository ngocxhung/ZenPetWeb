import React from 'react';

export default function ChatIcon() {
  return (
    <a
      href="https://m.me/zenpets.vn"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        width: 60,
        height: 60,
        borderRadius: '50%',
        background: '#e14b85',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px #ffb6d580',
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
        zIndex: 1000,
      }}
      onMouseOver={e => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.boxShadow = '0 6px 16px #e14b85cc';
      }}
      onMouseOut={e => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 12px #ffb6d580';
      }}
    >
      <i 
        className="fab fa-facebook-messenger" 
        style={{
          color: '#fff',
          fontSize: 32,
        }}
      />
    </a>
  );
} 