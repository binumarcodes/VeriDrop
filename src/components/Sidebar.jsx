import React from 'react';

const Sidebar = ({ product, closeSidebar }) => (
  <div style={styles.overlay}>
    <div style={styles.sidebar}>
      <button onClick={closeSidebar} style={styles.closeButton}>✖</button>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h2 style={styles.productName}>{product.name}</h2>
      <p style={styles.productDescription}>{product.description}</p>
      <p style={styles.price}>Price: <strong>{product.price}</strong></p>
      <p style={styles.delivery}>Estimated Delivery: <strong>7th November</strong></p>
      <button style={styles.addButton} onClick={() => {
        alert('Added to cart');
      }}>Add to Cart</button>
    </div>
  </div>
);

const styles = {
  overlay: {
    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'flex-end',
    transition: 'all 0.3s ease-in-out', zIndex: 1000,
  },
  sidebar: {
    width: '400px', backgroundColor: '#fff', padding: '20px',
    boxShadow: '-2px 0 10px rgba(0,0,0,0.3)', borderTopLeftRadius: '15px',
    borderBottomLeftRadius: '15px', overflowY: 'auto', animation: 'slideIn 0.3s ease-in-out',
  },
  closeButton: {
    float: 'right', fontSize: '24px', border: 'none', background: 'none',
    cursor: 'pointer', color: '#999', transition: 'color 0.2s ease',
  },
  image: { width: '100%', borderRadius: '10px', marginBottom: '15px' },
  productName: { fontSize: '24px', fontWeight: '600', marginBottom: '10px' },
  productDescription: { color: '#555', fontSize: '16px', lineHeight: '1.6' },
  price: { fontSize: '18px', color: '#333', marginTop: '15px' },
  delivery: { fontSize: '16px', color: '#555' },
  addButton: {
    width: '100%', padding: '12px', backgroundColor: '#4CAF50', color: '#fff',
    border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold',
    marginTop: '20px', transition: 'background-color 0.3s ease',
  },
};

export default Sidebar;
