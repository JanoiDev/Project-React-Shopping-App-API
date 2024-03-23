import React from "react";
import numeral from "numeral";
import { motion } from "framer-motion";

const Summary = ({ cartItems }) => {
  /////////////////////////////////
  // total summary for cart summary
  const totalAmount = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  /////////////////////////////////
  // add 2% tax on the totalAmount
  const taxAmount = totalAmount * 0.02;

  //////////////////////////////
  // total quantity in the cart
  const totalQuantity = cartItems.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  //////////////////////////////
  // Overall price
  const totalAmountWithTax = totalAmount + taxAmount;

  return (
    <motion.div
      className="cart-summary"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
    >
      <h3 className="summary-title">Summary</h3>
      <div className="summary-total">
        <span>Subtotal*</span> ${numeral(totalAmount).format("0, 0.00")}
      </div>

      <div className="summary-total-tax">
        <span>Tax charges (2%)</span> ${numeral(taxAmount).format("0, 0.00")}
      </div>

      <div className="summary-total-quantity">
        <span>Total Quantity*</span> {totalQuantity}
      </div>

      <div className="summary-total-amount">
        <span>Total Price</span>
        <div>${numeral(totalAmountWithTax).format("0, 0.00")}</div>
      </div>
      <button className="check-out-btn">Proceed to checkout</button>
    </motion.div>
  );
};

export default Summary;
