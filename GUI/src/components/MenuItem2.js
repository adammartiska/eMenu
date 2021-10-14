import React from "react";
import Counter from "./Counter";
import "./MenuItem.css";

const MenuItem2 = ({
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
      <div className="menu-item-tail">
        <Counter
          id={id}
          count={count}
          onAddButtonClick={onAddButtonClick}
          onRemoveButtonClick={onRemoveButtonClick}
        />
        <div style={{ marginLeft: 10 }}>{price} €</div>
      </div>
    </div>
  );
};

export default MenuItem2;
