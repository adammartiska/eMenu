import React from "react";
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";

export const PriceTaggedItem = ({ title, price, additionalOrderInfo }) => {
  return (
    <div
      style={{
        marginTop: 15,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginInline: 5,
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
          {additionalOrderInfo && (
            <Typography
              component="div"
              variant="body1"
              sx={{
                fontSize: 12,
                marginLeft: 1,
                marginTop: 0.5,
              }}
            >
              + mlieko odobrat hranolky posolit viac
            </Typography>
          )}
        </div>
        <Typography
          component="div"
          variant="h5"
          sx={{ marginLeft: 1, alignSelf: "center" }}
        >
          {price} €
        </Typography>
      </div>
      <Divider variant="large" />
    </div>
  );
};
