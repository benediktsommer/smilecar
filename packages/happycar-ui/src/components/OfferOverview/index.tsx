import { memo } from 'react';
import { Grid } from '@material-ui/core';

import { useLoadOffers } from '../../hooks/useLoadOffers';

import { Filter } from './Filter';
import { OfferList } from './OfferList';
import { FilterProvider } from './Filter/context';

export const OfferOverview = memo(() => {
  useLoadOffers();

  return (
    <FilterProvider>
      <Grid container>
        <Grid item xs={12}></Grid>
        <Grid item xs={12} md={3}>
          <Filter />
        </Grid>
        <Grid item xs={12} md={9}>
          <OfferList />
        </Grid>
      </Grid>
    </FilterProvider>
  );
});
