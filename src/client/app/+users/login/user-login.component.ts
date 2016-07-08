import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { UserService } from '../../shared/services/user.service';

@Component({
  moduleId: module.id,
  selector: 'user-login',
  templateUrl: 'user-login.html',
  styleUrls: ['user-login.css'],
  providers: [UserService],
  directives: [ROUTER_DIRECTIVES],
})

export class UserLoginComponent {
  public user: any;
  public form: any;
  public alert: string;

  constructor(private router: Router, public userService: UserService) {
    this.user = {
      email: '',
      password: ''
    }
  }

  public onSubmit(form: any, valid: boolean): void {
    this.userService.login(form).subscribe((data: any) => {
      localStorage.setItem('firebaseUrl', data.user.firebaseUrl);
      localStorage.setItem('firebaseToken', data.user.firebaseToken);
      localStorage.setItem('auth_token', data.auth_token)
      this.router.navigate(['/transactions']);
    }, (error) => {
      this.alert = error._body;
    });
  }
}
