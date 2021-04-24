import { ComponentType, lazy, LazyExoticComponent } from 'react';

export interface IRoutes {
  offerOverview: string;
}

export const routes: IRoutes = {
  offerOverview: '/',
};

export const routesComponents: Record<
  keyof typeof routes,
  LazyExoticComponent<ComponentType<unknown>>
> = {
  offerOverview: lazy(() => import('../components/Screens/OfferOverview')),
};

export const notFoundComponent = lazy(
  () => import('../components/Screens/NotFound')
);
