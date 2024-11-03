// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import Sidebar from './components/Sidebar';

function App() {
  const [sidebarProduct, setSidebarProduct] = useState(null);

  const openSidebar = (product) => {
    setSidebarProduct(product);
  };

  const closeSidebar = () => {
    setSidebarProduct(null);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home openSidebar={openSidebar} />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      {sidebarProduct && (
        <Sidebar product={sidebarProduct} closeSidebar={closeSidebar} />
      )}
    </Router>
  );
}

export default App;
