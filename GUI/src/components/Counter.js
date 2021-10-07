import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./MenuItem.css";
import "./Counter.css";

const Counter = ({ id, count, onAddButtonClick, onRemoveButtonClick }) => {
  return (
    <ButtonGroup
      sx={{
        height: 30,
      }}
      size="small"
      variant="contained"
    >
      <IconButton
        onClick={() => onRemoveButtonClick(id)}
        size="small"
        aria-label="delete"
        color="primary"
        sx={{
          width: 30,
        }}
      >
        <RemoveIcon />
      </IconButton>
      <Button
        disabled
        sx={{
          "&.Mui-disabled": {
            bgcolor: "primary.dark",
            color: "white",
          },
        }}
      >
        {count}
      </Button>
      <IconButton
        onClick={() => onAddButtonClick(id)}
        aria-label="delete"
        color="primary"
        sx={{
          width: 30,
        }}
      >
        <AddIcon />
      </IconButton>
    </ButtonGroup>
  );
};

export default Counter;
