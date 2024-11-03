import React from 'react';

const categories = ["Phone & Tablet", "Fashion", "Computing", "Appliances"];

const CategoryList = () => (
  <div style={{ display: 'flex', gap: '10px', padding: '20px' }}>
    {categories.map((category, index) => (
      <div key={index} style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
        {category}
      </div>
    ))}
  </div>
);

export default CategoryList;
