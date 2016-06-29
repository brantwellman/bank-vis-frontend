import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { NgFor, NgClass, DatePipe } from '@angular/common';
import { TransactionsService } from './transactions.service';
import { UserService } from '../shared/services/user.service';

@Component({
  moduleId: module.id,
  selector: 'transactions',
  templateUrl: 'transactions.html',
  styleUrls: ['transactions.css'],
  providers: [TransactionsService, UserService],
  directives: [ROUTER_DIRECTIVES, NgFor, NgClass],
  pipes: [DatePipe]
})

export class TransactionsComponent implements OnInit {
  public transactions: any;
  public currentUser: any;
  public firebaseToken: string;
  public firebaseRef: string;

  constructor(private router:Router,
              private transactionsService: TransactionsService,
              private userService: UserService) {}

  ngOnInit() {
    this.userService.currentUser.subscribe((data: any) => {
      console.log(data);
      this.firebaseToken = data.user.firebaseToken;
      this.firebaseRef = data.user.firebaseUrl;
      this.getTransactions();
    });
  }

  getTransactions(): void {
    this.transactionsService.getTransactions(this.firebaseToken, this.firebaseRef).subscribe((data: any) => {
      this.transactions = data;
    });
  }

  format(amount: any): any {
    let newAmount = amount.toString();
    return `$${newAmount.slice(0, -4)}.${newAmount.slice(-4, -2)}`
  }
}
