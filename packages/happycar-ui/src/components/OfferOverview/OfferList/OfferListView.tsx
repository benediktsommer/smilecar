import { memo } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  withStyles,
} from '@material-ui/core';

import { IOffer } from '../../../interfaces/offer.interface';

import { Offer } from './Offer';

interface IProps {
  offers: IOffer[];
}

const OfferCard = withStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
}))(Card);

export const OfferListView = memo(({ offers }: IProps) => {
  return (
    <>
      {offers.map((offer, index) => (
        <Box my={4} key={String(index)}>
          <OfferCard>
            <Box pt={2} px={2}>
              <Typography variant="subtitle2">
                {offer.vehicle.category}
              </Typography>
              <Typography variant="h6">{offer.vehicle.name}</Typography>
            </Box>
            <CardContent>
              <Offer offer={offer} />
            </CardContent>
          </OfferCard>
        </Box>
      ))}
    </>
  );
});
