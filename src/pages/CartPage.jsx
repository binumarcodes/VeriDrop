import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart } = useCart();

  const totalAmount = cart.reduce((total, item) => total + parseFloat(item.price.replace(/[₦,]/g, '')), 0);

  return (
    <div>
      <h2 style={{color: "#fff"}}>Your Cart</h2>
      {cart.length > 0 ? (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - {item.price}
              </li>
            ))}
          </ul>
          <h3>Total: ₦{totalAmount.toLocaleString()}</h3>
          <Link to="/checkout">
            <button>Checkout</button>
          </Link>
        </>
      ) : (
        <p style={{color: "#fff"}}>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
