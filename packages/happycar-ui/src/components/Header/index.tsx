import { memo } from 'react';
import { Box, Container, Divider } from '@material-ui/core';

import { routes } from '../../constants/routes';
import { HappyLogo } from '../UI/images/HappyLogo';

export const Header = memo(() => (
  <Container maxWidth="lg">
    <Box display="flex">
      <a href={routes.offerOverview}>
        <HappyLogo />
      </a>
    </Box>
  </Container>
));
