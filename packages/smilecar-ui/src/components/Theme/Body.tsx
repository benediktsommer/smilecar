import { memo } from 'react';
import { Box, Container, Divider, useTheme } from '@material-ui/core';

import { Header } from '../Header';
import { Footer } from '../Footer';

export const Body = memo(({ children }) => {
  const theme = useTheme();

  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Header />
      <Divider />
      <Box bgcolor={theme.palette.grey[50]} py={2} flex={1}>
        <Container maxWidth="lg">
          <>{children}</>
        </Container>
      </Box>
      <Divider />
      <Footer />
      <Divider />
    </Box>
  );
});
