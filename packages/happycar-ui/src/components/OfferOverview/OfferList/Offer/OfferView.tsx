import { memo } from 'react';
import { ArrowForward } from '@material-ui/icons';
import { Box, createStyles, Grid, withStyles } from '@material-ui/core';

import { IOffer } from '../../../../interfaces/offer.interface';

import { CarImage } from './CarImage';
import { OfferCondition } from './OfferCondition';
import { OfferMeta } from './OfferMeta';

interface IProps {
  offer: IOffer;
  handleNextButton(): void;
}

export const OfferView = memo(({ offer, handleNextButton }: IProps) => {
  return (
    <>
      <Grid container justify="space-between" spacing={2} alignItems="center">
        <Grid item xs={12} md={5}>
          <CarImage
            src={offer.vehicle.imageUrl}
            alt={`${offer.vehicle.category} - ${offer.vehicle.name}`}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <OfferCondition
            price={offer.price}
            term={12}
            handleClick={handleNextButton}
          />
        </Grid>
        <Grid item xs={12}>
          <OfferMeta vehicle={offer.vehicle} />
        </Grid>
      </Grid>
    </>
  );
});
