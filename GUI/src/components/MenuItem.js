import React from "react";
import Counter from "./Counter";
import "./MenuItem.css";

const MenuItem = ({ name, price }) => {
  return (
    <div className="menu-item-wrapper">
      <div>{name}</div>
      <div>{price}</div>
      <Counter />
    </div>
  );
};

export default MenuItem;
