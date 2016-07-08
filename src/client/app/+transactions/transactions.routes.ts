import { RouterConfig } from '@angular/router';

import { TransactionsComponent } from './transactions.component';
import { TransactionsShowComponent } from './+show/transactions-show.component';
import { NewTransactionsComponent } from './+new/new-transactions.component';

export const TransactionsRoutes: RouterConfig = [
  {
    path: 'transactions',
    component: TransactionsComponent,
  },
  {
    path: 'transactions/new',
    component: NewTransactionsComponent
  },
  {
    path: 'transactions/:month',
    component: TransactionsShowComponent
  }
];
