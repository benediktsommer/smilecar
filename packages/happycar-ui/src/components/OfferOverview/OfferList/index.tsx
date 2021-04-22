import { memo } from 'react';
import { Box, Card, CardContent, withStyles } from '@material-ui/core';

import { useGetFilteredOffers } from '../../../hooks/useGetFilteredOffers';

import { Offer } from './Offer';
import { OfferListView } from './OfferListView';

export const OfferList = memo(() => {
  const { offers } = useGetFilteredOffers();

  return <OfferListView offers={offers} />;
});
