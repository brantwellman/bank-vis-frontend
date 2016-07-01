import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { TransactionsComponent } from './+transactions/transactions.component';
import { CurrentUserModel } from './shared/services/current-user.model';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'app',
  viewProviders:  [HTTP_PROVIDERS],
  templateUrl: 'app.component.html',
  styleUrls: ['app.css'],
  directives: [ROUTER_DIRECTIVES, NgIf],
  providers: [CurrentUserModel]
})
export class AppComponent {
  constructor(public currentUser: CurrentUserModel,
    public router: Router) {}

  public logOut(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
