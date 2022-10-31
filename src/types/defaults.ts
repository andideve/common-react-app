import type { RouteProps } from 'react-router-dom';

export type Route = Pick<RouteProps, 'index' | 'path'> & { component: React.FC<unknown> };
