import { Component, OnInit } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { TransactionsService } from './services/transactions.service';
import { MonthNavComponent } from '../shared/components/nav/month-nav.component';
import { ListComponent } from '../shared/components/list/list.component';

@Component({
  moduleId: module.id,
  selector: 'transactions',
  templateUrl: 'transactions.html',
  styleUrls: ['transactions.css'],
  directives: [ROUTER_DIRECTIVES, NgFor, NgClass, MonthNavComponent, ListComponent],
  providers: [TransactionsService]
})

export class TransactionsComponent implements OnInit {
  public firebaseUrl: string;
  public firebaseToken: string;
  public months: Array<string>;
  public transactions: Array<any>

  constructor(public transactionsService: TransactionsService) {
    this.months = [];
    this.firebaseUrl = localStorage.getItem('firebaseUrl');
    this.firebaseToken = localStorage.getItem('firebaseToken');
  }

  ngOnInit() {
    this.transactionsService.getTransactionsIndex(this.firebaseUrl, this.firebaseToken).subscribe((data: any) => {
      for (let month in data) {
        this.months.push(month);
      }
      this.getRecentTransactions();
    });
  }

  public getRecentTransactions(): void {
    this.transactionsService.getTransactions(this.firebaseUrl, this.months[0], this.firebaseToken).subscribe((data: any) => {
      this.transactions = data.transactions.slice(0, 10);
    })
  }
}
