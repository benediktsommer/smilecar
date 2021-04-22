import { memo } from 'react';
import { Box, Typography, withStyles } from '@material-ui/core';
import { Person, AcUnit, AccountTree, LocalMall } from '@material-ui/icons';

import { IOffer } from '../../../../interfaces/offer.interface';

interface IProps {
  vehicle: IOffer['vehicle'];
}

const MetaBox = withStyles((theme) => ({
  root: {
    '& div:first-child': {
      padding: theme.spacing(0, 0, 0, 0),
    },
  },
}))(Box);

export const OfferMeta = memo(({ vehicle }: IProps) => {
  return (
    <>
      <Typography variant="body1">
        <strong>Vehicle category: {vehicle.category.toUpperCase()}</strong>
      </Typography>
      <MetaBox display="flex">
        {vehicle.seats > 0 && (
          <Box px={2}>
            <Person /> {`${vehicle.seats}`}
          </Box>
        )}
        <Box px={2}>
          <AccountTree /> {vehicle.gearType === 'automatic' && 'M'}
        </Box>
        {vehicle.hasAC && (
          <Box px={2}>
            <AcUnit />
          </Box>
        )}
        {vehicle.bags > 0 && (
          <Box px={2}>
            <LocalMall />{' '}
            {`${vehicle.bags}${vehicle.bags > 0 ? ` - ${vehicle.bags}` : ''}`}
          </Box>
        )}
      </MetaBox>
    </>
  );
});
