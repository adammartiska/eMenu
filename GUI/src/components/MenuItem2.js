import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Counter from "./Counter";
import RemoveIcon from "@mui/icons-material/Remove";
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
