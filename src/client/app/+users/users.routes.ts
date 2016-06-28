import { RouterConfig } from '@angular/router';

import { UserLoginComponent } from './login/user-login.component';

export const UsersRoutes: RouterConfig = [
  {path: 'users/login', component: UserLoginComponent}
];
