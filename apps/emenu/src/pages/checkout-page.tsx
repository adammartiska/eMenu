import { useDispatch, useSelector } from 'react-redux';
import * as React from 'react';
import { Typography, Button } from '@mui/material';
import { incrementCount, decrementCount } from '@temp-workspace/customer/redux';
import { getMealById, getDrinkById } from '@temp-workspace/shared/utils';
import { useCreateSuborderMutation } from '@temp-workspace/customer/generated/graphql';
import { CheckoutItem } from '@temp-workspace/shared/shared-components';
import { emptyCart, saveOrderId } from '@temp-workspace/customer/redux';
import { saveToken } from '@temp-workspace/customer/redux';
import './drinks-menu-page.scss';
import './checkout-page.module.css';

/* eslint-disable-next-line */
export interface CheckoutPageProps {}

export interface CheckoutItem {
  id: number;
  count: number;
}

export function CheckoutPage(props: CheckoutPageProps) {
  const userToken = useSelector((state: any) => state?.user?.token);
  const drinksOrder = useSelector((state: any) => state?.order?.inCart?.drinks);
  const mealsOrder = useSelector((state: any) => state?.order?.inCart?.meals);
  const [createSuborderMutation] = useCreateSuborderMutation({
    variables: {
      tableId: 51,
      meals: mealsOrder,
      drinks: drinksOrder,
      //below is random token with length of our token, received token will be different
      token: userToken ?? 'vDso4eBx',
    },
  });

  //TODO WTF???
  const meals = useSelector((state: any) => state?.meals?.meals?.meals);
  const drinks = useSelector((state: any) => state?.drinks?.drinks);
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
      {mealsOrder.length === 0 && drinksOrder.length === 0 ? (
        <Typography
          component="div"
          variant="h4"
          sx={{
            height: '80vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'grayInactive.main',
          }}
        >
          Nemate zatial ziadne objednavky
        </Typography>
      ) : (
        <>
          {mealsOrder.map(({ id, count }: CheckoutItem) => {
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
          {drinksOrder.map(({ id, count }: CheckoutItem) => {
            const { name, price } = getDrinkById(id, drinks);
            return (
              <CheckoutItem
                id={id}
                title={name}
                price={price}
                count={count}
                isMeal={false}
              />
            );
          })}
        </>
      )}
      <Button
        onClick={submitOrder}
        variant="contained"
        //color="grayInactive"
        //endIcon={<AddShoppingCartIcon />}git
        sx={{
          width: 100,
          position: 'absolute',
          bottom: 65,
          left: 'calc(50% - 50px)',
          textTransform: 'none',
          height: 35,
          bgcolor: 'onyx',
          marginTop: 6,
        }}
      >
        Objednat
      </Button>
    </div>
  );
}

export default CheckoutPage;
