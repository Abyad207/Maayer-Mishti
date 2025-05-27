// src/components/ProductCard.js
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, title, description }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h4>{title} <span>›</span></h4>
      <p>{description}</p>
    </div>
  );
};

export default ProductCard;
