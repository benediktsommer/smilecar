import { memo, Suspense } from 'react';
import { Route, Switch } from 'react-router';

import {
  notFoundComponent,
  routes,
  routesComponents,
} from '../../constants/routes';

import { RouteLoader } from './RouteLoader';

export const RouteSwitch = memo(() => (
  <Suspense fallback={<RouteLoader />}>
    <Switch>
      <Route
        exact
        component={routesComponents.offerOverview}
        path={routes.offerOverview}
      />
      <Route component={notFoundComponent} />
    </Switch>
  </Suspense>
));
