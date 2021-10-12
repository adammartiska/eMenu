import React from "react";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { styled, Box } from "@mui/system";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Counter from "./Counter";
import "./MenuItem.css";

const MenuItem3 = ({
  name,
  id,
  price,
  count,
  onAddButtonClick,
  onRemoveButtonClick,
  onAddToBagClick,
}) => {
  const [expanded, setExpanded] = React.useState(false);
  const handleAddToBag = () => {
    onAddToBagClick(id);
    setExpanded(false);
  };
  return (
    <Box
      sx={{
        boxShadow: 3,
        border: 1,
        borderColor: "primary.main",
        borderRadius: 4,
      }}
    >
      <Button
        onClick={() => setExpanded(!expanded)}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        fullWidth
        //variant="contained"
      >
        <div>{name}</div>
        <div>{price}</div>
      </Button>
      {expanded && (
        <>
          <Divider variant="middle" />
          <div className="expanded-content">
            <Counter
              id={id}
              count={count}
              onAddButtonClick={onAddButtonClick}
              onRemoveButtonClick={onRemoveButtonClick}
            />
            <Button
              onClick={handleAddToBag}
              color="primary"
              variant="contained"
              endIcon={<AddShoppingCartIcon />}
              sx={{
                height: 35,
                bgcolor: "primary.dark",
                marginLeft: 2,
              }}
            >
              Pridat
            </Button>
          </div>
        </>
      )}
    </Box>
  );
};

export default MenuItem3;
