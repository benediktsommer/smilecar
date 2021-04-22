import { memo } from 'react';
import { Box } from '@material-ui/core';

import { routes } from '../../constants/routes';
import { HappyLogo } from '../UI/images/HappyLogo';

export const Footer = memo(() => (
  <Box textAlign="center" py={3}>
    <a href={routes.offerOverview}>
      <HappyLogo />
    </a>
  </Box>
));
