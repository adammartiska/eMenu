import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./MenuItem.css";

const MenuItem2 = ({ name, price }) => {
  return (
    <div className="menu-item-wrapper">
      <div>{name}</div>
      <div className="menu-item-tail">
        <ButtonGroup
          class=".MuiButtonGroup-root"
          variant="contained"
          aria-label="outlined primary button group"
        >
          <IconButton size="small" aria-label="delete" color="primary">
            <RemoveIcon />
          </IconButton>
          <Button
            disabled
            sx={{
              "&.Mui-disabled": {
                bgcolor: "primary.dark",
                color: "white",
              },
              minWidth: 40,
            }}
          >
            0
          </Button>
          <IconButton aria-label="delete" color="primary">
            <AddIcon />
          </IconButton>
        </ButtonGroup>
        <div style={{ marginLeft: 10 }}>{price} €</div>
      </div>
    </div>
  );
};

export default MenuItem2;
