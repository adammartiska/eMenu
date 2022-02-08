import React from 'react';
import { Typography } from '@mui/material';
import { Divider } from '@mui/material';
import Counter from '../counter/counter';
import { useDispatch } from 'react-redux';
import { incrementCount, decrementCount } from '../pages/orderSlice';
import './checkout-item.module.css';

/* eslint-disable-next-line */
export type CheckoutItemProps = {
  id: number;
  title: string;
  price: number;
  count: number;
  isMeal: boolean;
};

export const CheckoutItem: React.FC<CheckoutItemProps> = ({
  id,
  title,
  price,
  count,
  isMeal,
}) => {
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
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
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

export default CheckoutItem;
