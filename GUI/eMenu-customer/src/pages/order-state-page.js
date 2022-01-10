import { useDispatch, useSelector } from "react-redux";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useCreateSuborderMutation } from "../generated/graphql";
import { PriceTaggedItem } from "../components/PriceTaggedItem";
import "./drinks-menu-page.scss";

const formatPrice = (price, count) => {
  return `${(price * count).toFixed(2)} €`;
};

const OrderStatePage = () => {
  const [createSuborderMutation, { data, loading, error }] =
    useCreateSuborderMutation({
      variables: {
        tableId: 17,
        meals: [{ id: 1, count: 2 }],
        drinks: [{ id: 1, count: 3 }],
        token: "bpTtlPuC",
      },
    });
  const drinks = useSelector((state) => state?.drinks?.drinkOrder);
  const mealsOrder = useSelector((state) => state?.meals?.mealOrder);
  //TODO WTF???
  const meals = useSelector((state) => state?.meals?.meals?.meals);
  const dispatch = useDispatch();

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "space-between",
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
          //TODO Why is sx prop adding extra margin and style prop not???
          //because my default spacing is 8px can be adjusted in theme - responsiveness
          sx={{
            fontSize: 20,
            bgcolor: "orange",
            padding: 2,
            borderRadius: 2,
            marginTop: 2,
          }}
        >
          Objednavka prijata
        </Typography>
      </div>
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
  );
};

export default OrderStatePage;
