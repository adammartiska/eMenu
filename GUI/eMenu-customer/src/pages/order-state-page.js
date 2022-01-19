import { useDispatch, useSelector } from "react-redux";
import * as React from "react";
import { head, append } from "ramda";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";
import {
  useCreateSuborderMutation,
  useOrderChangedSubscriptionSubscription,
} from "../generated/graphql";
import { PriceTaggedItem } from "../components/PriceTaggedItem";
import "./drinks-menu-page.scss";
import { ErrorOutlineRounded } from "@mui/icons-material";

const formatPrice = (price, count) => {
  return `${(price * count).toFixed(2)} €`;
};

const OrderStatePage = () => {
  const orderId = useSelector((state) => state?.order?.id);
  const token = useSelector((state) => state?.user?.token);
  const [currentFinalPrice, setCurrentFinalPrice] = React.useState(0);
  //   const [createSuborderMutation, { data, loading, error }] =
  //     useCreateSuborderMutation({
  //       variables: {
  //         tableId: 17,
  //         meals: [{ id: 1, count: 2 }],
  //         drinks: [{ id: 1, count: 3 }],
  //         token: "bpTtlPuC",
  //       },
  //     });

  const { data, loading, error } = useOrderChangedSubscriptionSubscription({
    variables: {
      orderId,
      token,
    },
  });

  const [orderedDrinks, setOrderedDrinks] = React.useState(null);
  const [orderedMeals, setOrderedMeals] = React.useState(null);
  //TODO WTF???
  const meals = useSelector((state) => state?.meals?.meals?.meals);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (data?.orderChanged) {
      const newSuborder = head(data?.orderChanged.suborders);
      console.log(newSuborder);
      setOrderedMeals((orderedMeals) => {
        if (orderedMeals) {
          return [...newSuborder?.meals, ...orderedMeals];
        } else {
          return newSuborder?.meals;
        }
      });
      setOrderedDrinks((orderedDrinks) => {
        if (orderedDrinks) {
          return [...newSuborder?.drinks, ...orderedDrinks];
        } else {
          return newSuborder?.drinks;
        }
      });
      setCurrentFinalPrice(data?.orderChanged?.finalPrice);
    }
  }, [data, error]);

  console.log(orderedDrinks);
  console.log(orderedMeals);

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
        {orderedMeals?.map(({ id, name, price }) => (
          <PriceTaggedItem
            key={id}
            id={id}
            title={name}
            price={price}
            //additionalOrderInfo={additionalOrderInfo}
          />
        ))}
        {orderedDrinks?.map(({ id, name, price }) => (
          <PriceTaggedItem
            key={id}
            id={id}
            title={name}
            price={price}
            //additionalOrderInfo={additionalOrderInfo}
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
          {`${currentFinalPrice ?? 0} €`}
        </Button>
      </div>
    </div>
  );
};

export default OrderStatePage;
