import {Component, OnInit} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {NgFor, NgClass, DatePipe} from '@angular/common';
import {TransactionsService} from './transactions.service';

@Component({
  moduleId: module.id,
  selector: 'transactions',
  templateUrl: 'transactions.html',
  styleUrls: ['transactions.css'],
  providers: [TransactionsService],
  directives: [ROUTER_DIRECTIVES, NgFor, NgClass],
  pipes: [DatePipe]
})

export class TransactionsComponent implements OnInit {
  public transactions: any;

  constructor(private router:Router,
              private transactionsService: TransactionsService) {}

  ngOnInit() {
    this.getTransactions();
  }

  getTransactions() {
    this.transactionsService.getTransactions().subscribe(data => {
      this.transactions = data;
    });
  }

  format(amount) {
    let newAmount = amount.toString();
    return `$${newAmount.slice(0, -4)}.${newAmount.slice(-4, -2)}`
  }
}
