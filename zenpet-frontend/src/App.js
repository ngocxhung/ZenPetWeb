import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatIcon from './components/ChatIcon';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Service from './pages/Service';

function App() {
  return (
    <Router>
      <Header />
      <main style={{minHeight: '80vh', padding: '20px'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </main>
      <Footer />
      <ChatIcon />
    </Router>
  );
}

export default App;
