import { lazy } from 'react';
import { Route } from '../types/defaults';

const routes: Route[] = [
  {
    path: '/',
    component: lazy(() => import('../pages/home')),
  },
];

export default routes;
