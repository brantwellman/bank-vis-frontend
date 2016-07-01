import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'transactions',
  templateUrl: 'transactions.html',
  styleUrls: ['transactions.css'],
  directives: [ROUTER_DIRECTIVES]
})

export class TransactionsComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    console.log('hello');
  }
}
