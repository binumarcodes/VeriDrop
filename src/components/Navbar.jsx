// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', borderBottom: '1px solid #ddd' }}>
    <h1>VeriDrop</h1>
    <div>
      <input type="text" placeholder="Search" style={{ padding: '5px', marginRight: '10px' }} />
      <Link to="/cart">
        <button>Cart</button>
      </Link>
    </div>
  </div>
);

export default Navbar;
