import Counter from "../components/Counter";
import { useDispatch, useSelector } from "react-redux";
import * as React from "react";
import Button from "@mui/material/Button";
import { incrementCount, decrementCount } from "./drinksSlice";
import { getMealById, getDrinkById } from "../utils/utils";
import { useCreateSuborderMutation } from "../generated/graphql";
import { CheckoutItem } from "../components/CheckoutItem";
import { emptyCart, saveOrderId } from "./orderSlice";
import { saveToken } from "./userSlice";
import "./drinks-menu-page.scss";

const formatPrice = (price, count) => {
  return `${(price * count).toFixed(2)} €`;
};

const CheckoutPage = () => {
  //const [tableId, setTableId] = React.useState(Math.rand());
  const userToken = useSelector((state) => state?.user?.token);
  const drinksOrder = useSelector((state) => state?.order?.inCart?.drinks);
  const mealsOrder = useSelector((state) => state?.order?.inCart?.meals);
  const [createSuborderMutation] = useCreateSuborderMutation({
    variables: {
      tableId: 50,
      meals: mealsOrder,
      drinks: drinksOrder,
      //below is random token with length of our token, received token will be different
      token: userToken ?? "vDso4eBx",
    },
  });

  //TODO WTF???
  const meals = useSelector((state) => state?.meals?.meals?.meals);
  const drinks = useSelector((state) => state?.drinks?.drinks);
  const dispatch = useDispatch();

  const handleAddButtonClick = React.useCallback(
    (id) => dispatch(incrementCount(id)),
    [dispatch]
  );

  const handleRemoveButtonClick = React.useCallback(
    (id) => dispatch(decrementCount(id)),
    [dispatch]
  );

  const submitOrder = React.useCallback(async () => {
    const response = await createSuborderMutation();
    if (response?.data) {
      dispatch(saveToken(response?.data?.createSuborder?.token));
      dispatch(saveOrderId(response?.data?.createSuborder?.id));
      dispatch(emptyCart());
    }
  }, [createSuborderMutation, dispatch]);

  return (
    <div
      style={
        {
          // display: "flex",
          // flexDirection: "column",
          // justifyContent: "center",
          // alignItems: "center",
        }
      }
    >
      {mealsOrder.map(({ id, count }) => {
        const { name, price } = getMealById(id, meals);
        return (
          <CheckoutItem
            id={id}
            title={name}
            price={price}
            count={count}
            isMeal
          />
        );
      })}
      {drinksOrder.map(({ id, count }) => {
        const { name, price } = getDrinkById(id, drinks);
        return (
          <CheckoutItem id={id} title={name} price={price} count={count} />
        );
      })}
      <Button
        onClick={submitOrder}
        variant="contained"
        color="complementary"
        //endIcon={<AddShoppingCartIcon />}git
        sx={{
          width: 100,
          position: "absolute",
          bottom: 65,
          left: "calc(50% - 50px)",
          textTransform: "none",
          height: 35,
          bgcolor: "onyx",
          marginTop: 6,
        }}
      >
        Objednat
      </Button>
    </div>
  );
};

export default CheckoutPage;
