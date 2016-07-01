import { Injectable } from '@angular/core';

@Injectable()
export class CurrentUserModel {
  
  public isLoggedIn(): string | boolean {
    return !!localStorage.getItem('auth_token');
  }
}