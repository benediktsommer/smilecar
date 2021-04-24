import { memo } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import { MainTheme } from './Theme/MainTheme';
import { RouteSwitch } from './RouteSwitch';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const SmileCar = memo(() => (
  <BrowserRouter>
    <MainTheme>
      <QueryClientProvider client={queryClient}>
        <RouteSwitch />
      </QueryClientProvider>
    </MainTheme>
  </BrowserRouter>
));
