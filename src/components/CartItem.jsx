import React from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { dispatch } = useCart();

  const handleRemoveFromCart = () => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item.id });
  };

  return (
    <div style={styles.cartItem}>
      <img src={item.image} alt={item.name} style={styles.image} />
      <div style={styles.details}>
        <h3 style={styles.name}>{item.name}</h3>
        <p style={styles.price}>{item.price}</p>
      </div>
      <button onClick={handleRemoveFromCart} style={styles.removeButton}>Remove</button>
    </div>
  );
};

const styles = {
  cartItem: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    borderBottom: '1px solid #ddd', padding: '10px 0',
  },
  image: { width: '60px', height: '60px', borderRadius: '8px', marginRight: '15px' },
  details: { flex: 1 },
  name: { fontSize: '18px', fontWeight: '500', color: '#333', marginBottom: '5px' },
  price: { fontSize: '16px', color: '#777' },
  removeButton: {
    background: 'none', color: '#ff6347', border: 'none', cursor: 'pointer', fontSize: '16px',
    padding: '5px', fontWeight: 'bold', transition: 'color 0.2s ease',
  },
};

export default CartItem;
