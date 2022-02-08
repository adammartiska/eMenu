import React from 'react';
import { Typography } from '@mui/material';
import { Divider } from '@mui/material';
import './price-tagged-item.module.css';

/* eslint-disable-next-line */
export type PriceTaggedItemProps = {
  id: number;
  title: string;
  price: number;
  additionalOrderInfo?: string | null;
  count: number;
};

export const PriceTaggedItem: React.FC<PriceTaggedItemProps> = ({
  title,
  price,
  additionalOrderInfo,
  id,
  //todo will need count later
  count,
}) => {
  return (
    <div
      style={{
        marginTop: 15,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
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
          sx={{ marginLeft: 1, alignSelf: 'center' }}
        >
          {price} €
        </Typography>
      </div>
      <Divider
      //variant="large"
      />
    </div>
  );
};

export default PriceTaggedItem;
