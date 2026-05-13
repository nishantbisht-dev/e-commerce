// import { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product, quantity, size) => {
//     setCartItems((prev) => {

//       const existingItem = prev.find(
//         (item) =>
//           item._id === product._id &&
//           item.size === size
//       );

//       // If product already exists in cart
//       if (existingItem) {
//         return prev.map((item) =>
//           item._id === product._id &&
//             item.size === size
//             ? {
//               ...item,
//               quantity: item.quantity + quantity,
//             }
//             : item
//         );
//       }

//       // Add new product
//       return [...prev, { ...product, quantity, size }];
//     });
//   };

//   const removeFromCart = (index) => {
//     setCartItems((prev) => prev.filter((_, i) => i !== index));
//   };

//   const updateQuantity = (index, type) => {
//     setCartItems((prev) => prev.map((item, i) => {
//       if (i !== index) return item;

//       const newQty = type === "increase" ? item.quantity + 1 : item.quantity - 1;

//       return {
//         ...item, quantity: newQty,
//       }
//     })
//       .filter((item) => item.quantity > 0)
//     );
//   };

//   const clearCart = () => {
//     setCartItems([]);
//   }

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);


import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

  // Load cart from localStorage
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add product to cart
  const addToCart = (product, quantity, size) => {

    setCartItems((prev) => {

      const existingItem = prev.find(
        (item) =>
          item._id === product._id &&
          item.size === size
      );

      // If same product + same size already exists
      if (existingItem) {

        return prev.map((item) =>
          item._id === product._id &&
          item.size === size
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        );
      }

      // Add new item
      return [...prev, { ...product, quantity, size }];
    });
  };

  // Remove item
  const removeFromCart = (index) => {
    setCartItems((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };

  // Increase or decrease quantity
  const updateQuantity = (index, type) => {

    setCartItems((prev) =>
      prev
        .map((item, i) => {

          if (i !== index) return item;

          const newQty =
            type === "increase"
              ? item.quantity + 1
              : item.quantity - 1;

          return {
            ...item,
            quantity: newQty,
          };
        })
        .filter((item) => item.quantity > 0)
    );
  };

  // Clear all cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);