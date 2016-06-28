import { provideRouter, RouterConfig } from '@angular/router';

import { TransactionsRoutes } from './+transactions/transactions.routes';

const routes: RouterConfig = [
  ...TransactionsRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
