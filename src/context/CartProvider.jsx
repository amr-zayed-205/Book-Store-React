import React, { useState } from "react";
import CartContext from "./cartContext";

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add To Cart
const addToCart = (item) => {
  const isExist = cartItems.find((cart) => cart.id === item.id);
  if (isExist) {
    // تحديث الكمية فقط للعنصر الموجود
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: item.quantity } // تحديث الكمية فقط
          : cartItem
      )
    );
  } else {
    // إضافة عنصر جديد إلى السلة
    setCartItems((prev) => [...prev, item]);
  }
};


  // Remove From Cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        cartItemsLength: cartItems.length,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
