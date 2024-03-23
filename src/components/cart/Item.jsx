import numeral from "numeral";
import React from "react";
import { TbMinus, TbPlus, TbX } from "react-icons/tb";
import { motion } from "framer-motion";

const Item = ({ item, handleRemove, handleAdd, handleRemoveQuantity }) => {
  return (
    <motion.div
      className="item-detail"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 2 }}
    >
      <div className="item-info">
        <div className="item-image">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="item-title">{item.title}</div>
      </div>
      <div className="item-unit-price">
        ${numeral(item.price).format("0, 0.00")}
      </div>
      <div className="item-quantity">
        <div className="Tbminus">
          <TbMinus onClick={() => handleRemoveQuantity(item.id)} />
        </div>{" "}
        {item.quantity}
        <div className="Tbplus">
          <TbPlus onClick={() => handleAdd(item)} />
        </div>
      </div>
      <div className="item-total-price">
        ${numeral(item.price * item.quantity).format("0, 0.00")}
      </div>
      <div className="item-remove" onClick={() => handleRemove(item.id)}>
        <TbX />
      </div>
    </motion.div>
  );
};

export default Item;
