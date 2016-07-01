import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../services/transactions.service';

@Component({
  moduleId: module.id,
  selector: 'new-transactions',
  templateUrl: 'new-transactions.html',
  providers: [TransactionsService]
})

export class NewTransactionsComponent implements OnInit {
  public form: any;
  public firebaseToken: string;
  public firebaseUrl: string;

  constructor(public transactionsService: TransactionsService) {}

  ngOnInit() {
    this.firebaseUrl = localStorage.getItem('firebaseUrl');
    this.firebaseToken = localStorage.getItem('firebaseToken')
    this.form = {
      month: '',
      transactions: ''
    }
  }

  onSubmit(formData: any): void {
    this.transactionsService.post(this.firebaseUrl, this.firebaseToken, formData).subscribe((data: any) => {
      console.log(data);
    });
  }

}