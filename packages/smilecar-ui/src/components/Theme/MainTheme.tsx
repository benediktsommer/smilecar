import { memo } from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';

import { Body } from './Body';
import { THEME_MUI } from './material';

export const MainTheme = memo(({ children }) => {
  return (
    <ThemeProvider theme={THEME_MUI}>
      <CssBaseline />
      <Body>{children}</Body>
    </ThemeProvider>
  );
});
