import { useDispatch, useSelector } from "react-redux";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";
import {
  useCreateSuborderMutation,
  useOrderChangedSubscription,
} from "../generated/graphql";
import { PriceTaggedItem } from "../components/PriceTaggedItem";
import "./drinks-menu-page.scss";

const formatPrice = (price, count) => {
  return `${(price * count).toFixed(2)} €`;
};

const OrderStatePage = () => {
  const orderId = useSelector((state) => state?.order?.id);
  const token = useSelector((state) => state?.user?.token);
  //   const [createSuborderMutation, { data, loading, error }] =
  //     useCreateSuborderMutation({
  //       variables: {
  //         tableId: 17,
  //         meals: [{ id: 1, count: 2 }],
  //         drinks: [{ id: 1, count: 3 }],
  //         token: "bpTtlPuC",
  //       },
  //     });

  const { data, loading, error } = useOrderChangedSubscription({
    variables: {
      orderId,
      token,
    },
  });
  const drinks = useSelector((state) => state?.drinks?.drinkOrder);
  const mealsOrder = useSelector((state) => state?.meals?.mealOrder);
  //TODO WTF???
  const meals = useSelector((state) => state?.meals?.meals?.meals);
  const dispatch = useDispatch();

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
        {[
          {
            title: "Burger",
            price: 12.8,
            additionalOrderInfo: true,
          },
          {
            title: "Pizza",
            price: 6.8,
            additionalOrderInfo: true,
          },
        ].map(({ title, price, additionalOrderInfo }) => (
          <PriceTaggedItem
            title={title}
            price={price}
            additionalOrderInfo={additionalOrderInfo}
          />
        ))}
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
          22.80 €
        </Button>
      </div>
    </div>
  );
};

export default OrderStatePage;
