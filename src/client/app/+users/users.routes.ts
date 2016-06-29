import { RouterConfig } from '@angular/router';

import { UserLoginComponent } from './login/user-login.component';
import { UserNewComponent } from './new/user-new.component';

export const UsersRoutes: RouterConfig = [
  {path: 'users/login', component: UserLoginComponent},
  {path: 'users/new', component: UserNewComponent}
];
