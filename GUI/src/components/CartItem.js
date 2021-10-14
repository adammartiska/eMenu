import React from "react";
import Counter from "./Counter";
import "./MenuItem.css";

const CartItem = ({
  name,
  price,
  id,
  onAddButtonClick,
  onRemoveButtonClick,
  count,
}) => {
  return (
    <div className="menu-item-wrapper">
      <div>{name}</div>
      <Counter
        id={id}
        count={count}
        onAddButtonClick={onAddButtonClick}
        onRemoveButtonClick={onRemoveButtonClick}
      />
      <div style={{ marginLeft: 10 }}>{price} €</div>
    </div>
  );
};

export default CartItem;
