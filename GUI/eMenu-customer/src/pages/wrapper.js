import React from "react";
import { last } from "ramda";
import { useSelector, useDispatch } from "react-redux";
import { useOrderChangedSubscriptionSubscription } from "../generated/graphql";
import {
  cacheOrderedDrinksFromWebSocket,
  cacheOrderedMealsFromWebSocket,
  updateFinalPriceFromWebSocket,
} from "./orderSlice";

export const Wrapper = ({ children }) => {
  const dispatch = useDispatch();
  const orderId = useSelector((state) => state?.order?.id);
  const token = useSelector((state) => state?.user?.token);

  const { data, loading, error } = useOrderChangedSubscriptionSubscription({
    variables: {
      orderId,
      token,
    },
  });
  React.useEffect(() => {
    if (data?.orderChanged) {
      const newSuborder = last(data?.orderChanged.suborders);
      console.log(newSuborder);
      dispatch(cacheOrderedMealsFromWebSocket(newSuborder?.meals));
      dispatch(cacheOrderedDrinksFromWebSocket(newSuborder?.drinks));
      dispatch(updateFinalPriceFromWebSocket(data?.orderChanged?.finalPrice));
    }
  }, [data, error, dispatch]);

  return <div>{children}</div>;
};
