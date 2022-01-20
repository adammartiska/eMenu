import { useSelector } from "react-redux";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";
import { PriceTaggedItem } from "../components/PriceTaggedItem";
import "./drinks-menu-page.scss";

const formatPrice = (price, count) => {
  return `${(price * count).toFixed(2)} €`;
};

const OrderStatePage = () => {
  const meals = useSelector((state) => state?.order?.confirmedOrdered?.meals);
  const drinks = useSelector((state) => state?.order?.confirmedOrdered?.drinks);
  const fp = useSelector((state) => state?.order?.finalPrice);

  return (
    <div
      style={{
        marginInline: 10,
        justifyContent: "space-between",
        flexDirection: "column",
        height: "80vh",
        //height: 1000,
        display: "flex",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
            marginInline: 20,
            fontWeight: 600,
          }}
        >
          {/* <Typography
        component="div"
        variant="h4"
        //TODO Why is sx prop adding extra margin and style prop not???
        //because my default spacing is 8px can be adjusted in theme - responsiveness
        sx={{ fontSize: 20 }}
      >
        Stav objednavky
      </Typography> */}
          <Typography
            component="div"
            variant="h4"
            sx={{
              fontWeight: 600,
            }}
          >
            Stav objednavky
          </Typography>
          <Typography
            component="div"
            variant="h4"
            sx={{
              color: "orange",
              fontWeight: 600,
            }}
          >
            Prijata
          </Typography>
        </div>
        <Divider
          sx={{
            marginTop: 1,
            marginBottom: 3,
            borderWidth: 1,
            //   borderStyle: "dotted",
            borderColor: "black",
            bgColor: "black",
          }}
        />
        {!meals || !drinks ? (
          <Typography
            component="div"
            variant="h4"
            sx={{
              height: "40vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "grayInactive.main",
            }}
          >
            Nemate zatial ziadne objednavky
          </Typography>
        ) : (
          <>
            {meals?.map(({ id, name, price, count }) => (
              <PriceTaggedItem
                key={id}
                id={id}
                title={name}
                price={price}
                count={count}
                //additionalOrderInfo={additionalOrderInfo}
              />
            ))}
            {drinks?.map(({ id, name, price, count }) => (
              <PriceTaggedItem
                key={id}
                id={id}
                title={name}
                price={price}
                count={count}
                //additionalOrderInfo={additionalOrderInfo}
              />
            ))}
          </>
        )}
      </div>
      {/* TODO think about absolute positioning of this button */}
      <div style={{ justifyContent: "center", display: "flex" }}>
        <Button
          //onClick={submitOrder}
          color="black"
          variant="contained"
          //endIcon={<AddShoppingCartIcon />}git
          sx={{
            justifyContent: "center",
            alignItems: "center",
            textTransform: "none",
            height: 35,
            width: 100,
            bgcolor: "black",
            color: "white",
            marginTop: 6,
          }}
        >
          {`${fp} €`}
        </Button>
      </div>
    </div>
  );
};

export default OrderStatePage;
