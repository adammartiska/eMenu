import React from "react";
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";
import Counter from "./Counter";
import { useDispatch } from "react-redux";
import { incrementCount, decrementCount } from "../pages/orderSlice";

export const CheckoutItem = ({ id, title, price, count, isMeal }) => {
  const dispatch = useDispatch();
  const handleAddButtonClick = React.useCallback(
    (id) => dispatch(incrementCount({ id, isMeal })),
    [dispatch, isMeal]
  );

  const handleRemoveButtonClick = React.useCallback(
    (id) => {
      if (count === 1) {
        return;
      }
      dispatch(decrementCount({ id, isMeal }));
    },
    [dispatch, count, isMeal]
  );
  return (
    <div style={{ marginBlock: 20 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginInline: 20,
        }}
      >
        <div>
          <Typography
            component="div"
            variant="h5"
            //style={{ marginBottom: 5 }}
          >
            {title}
          </Typography>
          <Typography
            component="div"
            variant="h5"
            sx={{
              //fontSize: 12,
              marginTop: 0.5,
            }}
          >
            {price} €
          </Typography>
        </div>
        <Counter
          id={id}
          count={count}
          onAddButtonClick={handleAddButtonClick}
          onRemoveButtonClick={handleRemoveButtonClick}
        />
      </div>
      <Divider variant="middle" />
    </div>
  );
};
