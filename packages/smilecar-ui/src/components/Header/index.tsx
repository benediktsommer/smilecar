import { memo } from 'react';
import { Box, Container, Divider } from '@material-ui/core';

import { routes } from '../../constants/routes';
import { HappyLogo } from '../UI/images/HappyLogo';
import { LanguageSelector } from '../LanguageSelector';

export const Header = memo(() => (
  <Container maxWidth="lg">
    <Box display="flex" justifyContent="space-between">
      <Box>
        <a href={routes.offerOverview}>
          <HappyLogo />
        </a>
      </Box>
      <Box pt={2}>
        <LanguageSelector />
      </Box>
    </Box>
  </Container>
));
