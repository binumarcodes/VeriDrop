import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>VeriDrop</h1>
      <Link to="/cart" style={styles.cartLink}>
        🛒 Cart
      </Link>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
  },
  logo: { fontSize: '24px' },
  cartLink: { fontSize: '18px', color: '#fff', textDecoration: 'none' },
};

export default Header;
