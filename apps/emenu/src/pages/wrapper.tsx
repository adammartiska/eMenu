import React from 'react';
import { last } from 'ramda';
import { useSelector, useDispatch } from 'react-redux';
import { useOrderChangedSubscriptionSubscription } from '../../../../libs/customer/generated/graphql';
import {
  cacheOrderedDrinksFromWebSocket,
  cacheOrderedMealsFromWebSocket,
  updateFinalPriceFromWebSocket,
  updateOrderStateFromWebSocket,
} from '@temp-workspace/customer/redux';

//TODO should I implement this as a hook? would be better
export const Wrapper: React.FC<any> = ({ children }) => {
  const dispatch = useDispatch();
  const orderId = useSelector((state: any) => state?.order?.id);
  const token = useSelector((state: any) => state?.user?.token);

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
      dispatch(updateOrderStateFromWebSocket(data?.orderChanged?.orderState));
      dispatch(updateFinalPriceFromWebSocket(data?.orderChanged?.finalPrice));
      dispatch(cacheOrderedMealsFromWebSocket(newSuborder?.meals));
      dispatch(cacheOrderedDrinksFromWebSocket(newSuborder?.drinks));
    }
  }, [data, error, dispatch]);

  return <div>{children}</div>;
};

export default Wrapper;
