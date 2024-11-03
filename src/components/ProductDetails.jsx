// src/components/ProductDetails.jsx
import React from 'react';

const ProductDetails = ({ product }) => (
  <div style={{ display: 'flex', gap: '20px' }}>
    <img src={product.image} alt={product.name} style={{ width: '300px', borderRadius: '5px' }} />
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <button>Add to Cart</button>
    </div>
  </div>
);

export default ProductDetails;
