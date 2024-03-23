import React from "react";
import "./CartContainer.css";
import Item from "./Item";
import Summary from "./Summary";
import { useCart } from "../../contexts/CartContext";

const CartContainer = () => {
  const { cartItems, removeFromCart, addToCart, removeQuantity } = useCart();

  //////////////
  // Add item
  const handleAdd = (product) => {
    addToCart(product);
  };

  //////////////
  // Remove item
  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  //////////////
  // Remove item quantity
  const handleRemoveQuantity = (productId) => {
    removeQuantity(productId);
  };

  return (
    <div
      className="cart-wrapper"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      <h2 className="section-title">Shopping Cart</h2>
      <div className="cart-container">
        {cartItems && cartItems.length > 0 ? (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <Item
                  key={item.id}
                  item={item}
                  handleRemove={handleRemove}
                  handleAdd={handleAdd}
                  handleRemoveQuantity={handleRemoveQuantity}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="no-item">
            <p>No item in the cart</p>
          </div>
        )}
        <Summary cartItems={cartItems} />
      </div>
    </div>
  );
};

export default CartContainer;
