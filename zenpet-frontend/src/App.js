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
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { CartProvider } from './contexts/CartContext';
import { AdminProvider } from './contexts/AdminContext';
import AdminEmails from './pages/AdminEmails';
import AdminOrders from './pages/AdminOrders';
import AdminLayout from './pages/AdminLayout';
import AdminProducts from './pages/AdminProducts';
import AdminCategories from './pages/AdminCategories';

function App() {
  return (
    <AdminProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="emails" element={<AdminEmails />} />
              <Route path="orders" element={<AdminOrders />} />
              <Route path="products" element={<AdminProducts />} />
              <Route path="categories" element={<AdminCategories />} />
            </Route>
            <Route path="*" element={
              <>
                <Header />
                <main style={{minHeight: '80vh', padding: '20px', paddingTop: 80}}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                  </Routes>
                </main>
                <Footer />
                <ChatIcon />
              </>
            } />
          </Routes>
        </Router>
      </CartProvider>
    </AdminProvider>
  );
}

export default App;
