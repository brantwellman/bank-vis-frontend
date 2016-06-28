import {Component, OnInit} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.html',
  styleUrls: ['home.css'],
  providers: [],
  directives: [ROUTER_DIRECTIVES],
})

export class HomeComponent implements OnInit {
  public transactions: any;

  constructor(private router: Router) {}

  ngOnInit() {
    console.log('init home component');
  }
}
