import React from 'react';
import CategoryList from '../components/CategoryList';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'iPhone 16', price: '₦3,000,000', image: 'https://www.bell.ca/Styles/wireless/iphone_16_pro_max/iPhone_16_Pro_Max_Desert_Titanium_lrg3.png', description: 'Desert Titanium, 1TB' },
  { id: 2, name: 'Pixel 9', price: '₦1,500,000', image: 'https://www.bell.ca/Styles/wireless/Google_Pixel_9_Pro_XL/Google_Pixel9-Pro_XL_Obsidian_Alt_lrg_3.png' , description: 'Latest Google Pixel' },
];

const Home = ({ openSidebar }) => (
  <div>
    <CategoryList />
    <h2>Shop by Product</h2>
    <div style={{ display: 'flex', gap: '20px' }}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} openSidebar={openSidebar} />
      ))}
    </div>
  </div>
);

export default Home;
