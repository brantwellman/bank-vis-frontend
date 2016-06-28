import { provideRouter, RouterConfig } from '@angular/router';

import { HomeRoutes } from './+home/home.routes';
import { UsersRoutes } from './+users/users.routes';
import { TransactionsRoutes } from './+transactions/transactions.routes';

const routes: RouterConfig = [
  ...TransactionsRoutes,
  ...UsersRoutes,
  ...HomeRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
