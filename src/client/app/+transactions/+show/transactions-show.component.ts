import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { NgFor, NgClass, DatePipe, CurrencyPipe } from '@angular/common';
import { TransactionsService } from '../services/transactions.service';
import { UserService } from '../../shared/services/user.service';

@Component({
  moduleId: module.id,
  selector: 'transactions-show',
  templateUrl: 'transactions-show.html',
  styleUrls: ['transactions-show.css'],
  providers: [TransactionsService, UserService],
  directives: [ROUTER_DIRECTIVES, NgFor, NgClass],
  pipes: [DatePipe, CurrencyPipe]
})

export class TransactionsShowComponent implements OnInit {
  public transactions: any;
  public currentUser: any;
  public firebaseToken: string;
  public firebaseUrl: string;
  public month: string;
  public dateClickCount: number;
  public amountClickCount: number;
  public catClickCount: number;
  public total: number;

  constructor(private router:Router,
    private route: ActivatedRoute,
    private transactionsService: TransactionsService,
    private userService: UserService) {
      this.dateClickCount = 0;
      this.amountClickCount = 0;
      this.catClickCount = 0;
    }

  ngOnInit() {
    this.firebaseUrl = localStorage.getItem('firebaseUrl');
    this.firebaseToken = localStorage.getItem('firebaseToken');
    this.route.params.subscribe(param => {
      this.month = param['month'];
      this.getTransactions();
    });
  }

  public getTransactions(): void {
    this.transactionsService.getTransactions(this.firebaseUrl, this.month, this.firebaseToken).subscribe((data: any) => {
      this.transactions = data.transactions;
      this.total = this.sum();
    });
  }

  public sortByDate(): void {
    this.dateClickCount++;
    if (this.dateClickCount % 2) {
      this.transactions.sort((prev:any, current:any) => {
        return prev.times.when_recorded - current.times.when_recorded;
      });
    } else {
      this.transactions.sort((prev:any, current:any) => {
        return current.times.when_recorded - prev.times.when_recorded;
      });
    }
  }

  public sortByAmount(): void {
    this.amountClickCount++;
    if (this.amountClickCount % 2) {
      this.transactions.sort((prev:any, current:any) => {
        return current.amounts.amount - prev.amounts.amount;
      });
    } else {
      this.transactions.sort((prev:any, current:any) => {
        return prev.amounts.amount - current.amounts.amount;
      });
    }
  }

  public sum(): number {
    return this.transactions.reduce((prev:any, current:any) => {
      if (prev.amounts) {
        return prev.amounts.amount + current.amounts.amount; 
      } else {
        return prev + current.amounts.amount;
      }
    }, {amounts: {amount: 0}})
  }

  public format(amount: any): any {
    return amount / 10000;
  }
}
