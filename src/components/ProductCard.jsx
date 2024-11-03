// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product, openSidebar }) => (
  <div onClick={() => openSidebar(product)} style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '5px', cursor: 'pointer' }}>
    <img src={product.image} alt={product.name} style={{ width: '300px', maxHeight: "400px", borderRadius: '5px' }} />
    <h3>{product.name}</h3>
    <p>{product.price}</p>
  </div>
);

export default ProductCard;
