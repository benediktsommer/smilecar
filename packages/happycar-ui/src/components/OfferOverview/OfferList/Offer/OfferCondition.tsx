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
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2),
    },
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
    <Box textAlign="right" pt={3}>
      <Box>
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
            })} / Day`}
          </strong>
        </Typography>
      </Box>
      <Box pt={2}>
        <OfferCTA
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          endIcon={<ArrowForward />}
          onClick={handleClick}
          style={{ width: '280px' }}
        >
          Book now
        </OfferCTA>
      </Box>
    </Box>
  );
});
