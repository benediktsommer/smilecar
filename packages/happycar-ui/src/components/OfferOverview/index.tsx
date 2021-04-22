import { memo } from 'react';
import { Grid } from '@material-ui/core';

import { useLoadOffers } from '../../hooks/useLoadOffers';

import { Filter } from './Filter';
import { OfferList } from './OfferList';

export const OfferOverview = memo(() => {
  useLoadOffers();

  return (
    <Grid container>
      <Grid item xs={12} md={3}>
        <Filter />
      </Grid>
      <Grid item xs={12} md={9}>
        <OfferList />
      </Grid>
    </Grid>
  );
});
