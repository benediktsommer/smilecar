import { memo } from 'react';
import {
  Box,
  Card,
  CardContent,
  makeStyles,
  Typography,
  withStyles,
  Theme,
  createStyles,
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
    background: 'linear-gradient(270deg, #e85922 0%, #FFFFFF 1.5%)',
  },
}))(Card);

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    indicator: {
      width: 10,
      backgroundColor: theme.palette.primary.main,
    },
  })
);

export const OfferListView = memo(({ offers }: IProps) => {
  const { indicator } = useStyles();
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
            <div className={indicator} />
          </OfferCard>
        </Box>
      ))}
    </>
  );
});
