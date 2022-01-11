import React from "react";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/system";
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
    onAddToBagClick(id, name, price);
    setExpanded(false);
  };
  return (
    <Box
      sx={{
        boxShadow: 2,
        border: 1,
        borderColor: "onyx.main",
        borderRadius: 4,
      }}
    >
      <Button
        onClick={() => setExpanded(!expanded)}
        sx={{
          color: "black",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        //variant="contained"
      >
        <div>{name}</div>
        <div>{price} €</div>
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
              color="onyx"
              variant="contained"
              endIcon={<AddShoppingCartIcon />}
              sx={{
                height: 35,
                bgcolor: "onyx",
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
