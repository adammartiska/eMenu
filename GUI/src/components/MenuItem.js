import React from "react";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./MenuItem.css";

const MenuItem = ({ name, price }) => {
  return (
    <div className="menu-item-wrapper">
      <div>{name}</div>
      <div className="menu-item-tail">
        <IconButton aria-label="delete" color="primary">
          <AddShoppingCartIcon />
        </IconButton>
        <Divider orientation="vertical" variant="middle" flexItem />
        <div style={{ marginLeft: 10 }}>{price}€</div>
      </div>
    </div>
  );
};

export default MenuItem;
