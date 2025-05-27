// src/components/Products.js
import React from 'react';
import ProductCard from './ProductCard';
import './Products.css';

const products = [
  {
    image: 'https://i.imgur.com/0T8O8kS.png',
    title: 'Mango lassi delight',
    description: 'Savor the tropical sweetness of our Mango Lassi Delight.',
  },
  {
    image: 'https://i.imgur.com/t2DwNf2.png',
    title: 'Chocolate coconut truffles',
    description: 'Indulge in the rich flavors of our Chocolate Coconut Truffles.',
  },
  {
    image: 'https://i.imgur.com/UcwFlkO.png',
    title: 'Cardamom pistachio barfi',
    description: 'Enjoy the rich, nutty flavor of our Cardamom Pistachio Barfi.',
  },
];

const Products = () => {
  return (
    <section className="products" id="products">
      <div className="products-container">
        <h5>DELIGHTFUL SWEETS</h5>
        <h2>Indulge in our exquisite treats</h2>
        <div className="product-grid">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
