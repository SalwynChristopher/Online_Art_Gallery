import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext'; // Importing the context
import './ProductDisplay.css'; // Import a CSS file for styling

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext); // Getting the function to add to cart

  const handleAddToCart = () => {
    addToCart(product.id); // Adds product to cart when called
  };

  return (
    <div className="product-display">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">${product.price}</p>
      <button className="add-to-cart-button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDisplay;
