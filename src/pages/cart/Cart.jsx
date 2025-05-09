import "./cart.css";
import React, { useContext } from "react";
import OrderSummary from "./OrderSummary";
import CartItem from "./CartItem";
import CartContext from "../../context/cartContext";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );
  return (
    <div className="cart">
      <h1 className="cart-title">Your Shopping Cart</h1>
      <div className="cart-wrapper">
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              removeFromCart={removeFromCart}
              addToCart={addToCart}
              item={item}
            />
          ))}
        </div>
        <OrderSummary totalPrice={totalPrice} />
      </div>
    </div>
  );
};

export default Cart;
