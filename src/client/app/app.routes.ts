import { provideRouter, RouterConfig } from '@angular/router';

import { HomeRoutes } from './+home/home.routes';
import { UsersRoutes } from './+users/users.routes';
import { TransactionsRoutes } from './+transactions/transactions.routes';
import { InstructionsRoutes } from './+instructions/instructions.routes';

const routes: RouterConfig = [
  ...InstructionsRoutes,
  ...TransactionsRoutes,
  ...UsersRoutes,
  ...HomeRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
