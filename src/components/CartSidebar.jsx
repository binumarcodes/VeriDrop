import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';

const CartSidebar = ({ isOpen, closeCart }) => {
  const { cart } = useCart();

  const totalAmount = cart.reduce((acc, item) => acc + parseFloat(item.price.replace(/₦|,/g, '')), 0);

  return (
    <div style={{ ...styles.overlay, display: isOpen ? 'block' : 'none' }}>
      <div style={styles.sidebar}>
        <button onClick={closeCart} style={styles.closeButton}>✖</button>
        <h2 style={styles.header}>Your Cart</h2>

        {cart.length === 0 ? (
          <p style={styles.emptyMessage}>Your cart is empty.</p>
        ) : (
          <>
            {cart.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
            <div style={styles.totalContainer}>
              <p style={styles.totalText}>Total: ₦{totalAmount.toLocaleString()}</p>
              <button style={styles.checkoutButton}>Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed', top: 0, right: 0, bottom: 0, left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1000,
  },
  sidebar: {
    position: 'fixed', top: 0, right: 0, width: '400px', height: '100%',
    backgroundColor: '#fff', padding: '20px', boxShadow: '-2px 0px 10px rgba(0,0,0,0.2)',
    overflowY: 'auto', display: 'flex', flexDirection: 'column',
  },
  closeButton: {
    background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', marginBottom: '10px', alignSelf: 'flex-end',
  },
  header: { fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' },
  emptyMessage: { fontSize: '18px', color: '#555', textAlign: 'center', marginTop: '50px' },
  totalContainer: { marginTop: '20px' },
  totalText: { fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' },
  checkoutButton: {
    width: '100%', padding: '15px', backgroundColor: '#ff7f50', color: '#fff',
    border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '18px', fontWeight: '600',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)', transition: 'background-color 0.3s ease',
  },
};

export default CartSidebar;
