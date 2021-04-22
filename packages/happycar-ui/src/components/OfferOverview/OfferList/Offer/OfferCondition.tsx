import { memo } from 'react';
import {
  Box,
  Button,
  createStyles,
  Divider,
  Grid,
  Typography,
  withStyles,
} from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';

import { IOffer } from '../../../../interfaces/offer.interface';
import { formatCurrency } from '../../../../utils/format';

interface IProps {
  price: IOffer['price'];
  term: number;
  handleClick(): void;
}

const ConditionBox = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
  },
}))(Box);

const OfferCTA = withStyles((theme) =>
  createStyles({
    root: {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: theme.typography.subtitle2.fontSize,
      [theme.breakpoints.down('xs')]: {
        minWidth: '100%',
      },
    },
  })
)(Button);

export const OfferCondition = memo(({ price, term, handleClick }: IProps) => {
  return (
    <ConditionBox p={2}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        spacing={1}
      >
        <Grid item>
          <Typography variant="h5">
            <strong>
              {formatCurrency(price.value * term, {
                currency: price.currencyCode,
              })}
            </strong>
          </Typography>
          <Typography variant="subtitle2">
            <strong>
              {`${formatCurrency(price.value, {
                currency: price.currencyCode,
              })}/Tag`}
            </strong>
          </Typography>
        </Grid>
        <Grid item>
          <OfferCTA
            variant="contained"
            color="secondary"
            size="large"
            type="submit"
            endIcon={<ArrowForward />}
            onClick={handleClick}
          >
            Fahrzeug wählen
          </OfferCTA>
        </Grid>
      </Grid>
    </ConditionBox>
  );
});
