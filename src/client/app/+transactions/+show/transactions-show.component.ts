import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { NgIf, DatePipe, CurrencyPipe } from '@angular/common';
import { TransactionsService } from '../services/transactions.service';
import { UserService } from '../../shared/services/user.service';
import { ListComponent } from '../../shared/components/list/list.component';
import { MonthNavComponent } from '../../shared/components/nav/month-nav.component';

@Component({
  moduleId: module.id,
  selector: 'transactions-show',
  templateUrl: 'transactions-show.html',
  styleUrls: ['transactions-show.css'],
  providers: [TransactionsService, UserService],
  directives: [ROUTER_DIRECTIVES, ListComponent, MonthNavComponent, NgIf],
  pipes: [DatePipe, CurrencyPipe]
})

export class TransactionsShowComponent implements OnInit {
  public transactions: any;
  public currentUser: any;
  public firebaseToken: string;
  public firebaseUrl: string;
  public month: string;
  public months: Array<string>;

  constructor(private router:Router,
    private route: ActivatedRoute,
    private transactionsService: TransactionsService,
    private userService: UserService) {
      this.months = [];
    }

  ngOnInit() {
    this.firebaseUrl = localStorage.getItem('firebaseUrl');
    this.firebaseToken = localStorage.getItem('firebaseToken');
    this.transactionsService.getTransactionsIndex(this.firebaseUrl, this.firebaseToken).subscribe((data: any) => {
      for (let month in data) {
        this.months.push(month);
      }
    })
    this.route.params.subscribe(param => {
      this.month = param['month'];
      this.getTransactions();
    });
  }

  public getTransactions(): void {
    this.transactionsService.getTransactions(this.firebaseUrl, this.month, this.firebaseToken).subscribe((data: any) => {
      this.transactions = data.transactions;
    });
  }
}
