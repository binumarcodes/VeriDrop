// src/pages/ProductPage.jsx
import React from 'react';
import ProductDetails from '../components/ProductDetails';

const sampleProduct = {
  name: 'iPhone 16 Pro Max',
  description: 'Desert Titanium, 1TB',
  price: '₦3,000,000',
  image: 'https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-geo-240909_inline.jpg.large.jpg'
};

const ProductPage = () => (
  <div>
    <ProductDetails product={sampleProduct} />
  </div>
);

export default ProductPage;
