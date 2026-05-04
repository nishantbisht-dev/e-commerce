import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity, size) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) =>
          item.id === product.id &&
          item.category === product.category &&
          item.size === size
      );

    //   if (existingItem) {
    //     return prev.map((item) =>
    //       item === existingItem
    //         ? { ...item, quantity: item.quantity + quantity }
    //         : item
    //     );
    //   }

    if (existingItem) {
  return prev.map((item) =>
    item.id === product.id &&
    item.category === product.category &&
    item.size === size
      ? { ...item, quantity: item.quantity + quantity }
      : item
  );
}

      return [...prev, { ...product, quantity, size }];
    });
  };

  const removeFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
