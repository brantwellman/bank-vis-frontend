import {Component, OnInit} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'users',
  templateUrl: 'user-login.html',
  styleUrls: ['user-login.css'],
  providers: [],
  directives: [ROUTER_DIRECTIVES],
})

export class UserLoginComponent implements OnInit {
  public transactions: any;

  constructor(private router: Router) {}

  ngOnInit() {
    console.log('init user login component');
  }
}
