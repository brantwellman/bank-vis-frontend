import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { NgFor, NgClass, DatePipe } from '@angular/common';
import { TransactionsService } from '../services/transactions.service';
import { UserService } from '../../shared/services/user.service';

@Component({
  moduleId: module.id,
  selector: 'transactions-show',
  templateUrl: 'transactions-show.html',
  styleUrls: ['transactions-show.css'],
  providers: [TransactionsService, UserService],
  directives: [ROUTER_DIRECTIVES, NgFor, NgClass],
  pipes: [DatePipe]
})

export class TransactionsShowComponent implements OnInit {
  public transactions: any;
  public currentUser: any;
  public firebaseToken: string;
  public firebaseUrl: string;

  constructor(private router:Router,
              private route: ActivatedRoute,
              private transactionsService: TransactionsService,
              private userService: UserService) {}

  ngOnInit() {
    this.firebaseUrl = localStorage.getItem('firebaseUrl');
    this.firebaseToken = localStorage.getItem('firebaseToken');
    this.route.params.subscribe(param => {
      this.getTransactions(param['month']);
    });
  }

  public getTransactions(month: string): void {
    this.transactionsService.getTransactions(this.firebaseUrl, month, this.firebaseToken).subscribe((data: any) => {
      this.transactions = data.transactions;
    });
  }

  public format(amount: any): any {
    let newAmount = amount.toString();
    return `$${newAmount.slice(0, -4)}.${newAmount.slice(-4, -2)}`
  }
}
