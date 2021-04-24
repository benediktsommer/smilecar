import { memo } from 'react';
import { Box, Typography, withStyles } from '@material-ui/core';

import { IOffer } from '../../../interfaces/offer.interface';

interface IProps {
  rating: IOffer['supplier']['rating'];
}

const StarRatingOverall = withStyles((theme) => ({
  root: {
    background: 'url(./grey.png) no-repeat',
    height: '16px',
    maxWidth: '100px',
  },
}))(Box);

const StarRatingOverallFill = withStyles((theme) => ({
  root: {
    background: 'url(./yellow.png) no-repeat',
    height: '16px',
    maxWidth: '100px',
  },
}))(Box);

export const StarRating = memo(({ rating }: IProps) => (
  <Box>
    <StarRatingOverall>
      <StarRatingOverallFill style={{ width: `${rating.average * 100}%` }} />
      <Typography variant="subtitle2" component="span">
        &#216; {Math.round(5 * rating.average * 100) / 100} ({rating.count})
      </Typography>
    </StarRatingOverall>
  </Box>
));
