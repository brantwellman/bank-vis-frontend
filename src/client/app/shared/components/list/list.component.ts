import { Component, Input, OnInit } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css']
})

export class ListComponent implements OnInit {
  @Input() transactions: any;
  public dateClickCount: number;
  public amountClickCount: number;
  public catClickCount: number;
  public total: number;

  constructor() {
    this.dateClickCount = 0;
    this.amountClickCount = 0;
    this.catClickCount = 0;
  }

  ngOnInit() {
    this.total = this.sum();
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