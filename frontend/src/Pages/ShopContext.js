import React, { createContext, useState } from 'react';

export const ShopContext = createContext(); // Create the context

const ShopContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // State to manage the cart items

  const addToCart = (productId) => {
    // Function to add a product to the cart
    const newCart = [...cart, productId];
    setCart(newCart); // Updates the cart state
  };

  const removeFromCart = (productId) => {
    // Function to remove a product from the cart
    const newCart = cart.filter(id => id !== productId);
    setCart(newCart);
  };

  return (
    <ShopContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
