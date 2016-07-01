import { Injectable, OnInit } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TransactionsService implements OnInit {
  constructor(private http: Http){}

  ngOnInit(): void {
    console.log('hello');
  }

  public getTransactions(firebaseUrl:string, month:string, firebaseToken:string): Observable<any> {
    let url: string = `${firebaseUrl}transactions/${month}.json?auth=${firebaseToken}`;
    return this.http.get(url).map((res) => res.json());
  }

  public post(firebaseUrl:string, firebaseToken:string, formData: any): Observable<any> {
    let url: string = `${firebaseUrl}transactions/${formData.month.toLowerCase()}/.json?auth=${firebaseToken}`;
    let body: any = formData.transactions;
    return this.http.put(url, body).map((res) => res.json());
  }

  public getSortedTransactions(attr: string, firebaseUrl:string, month:string, firebaseToken:string): Observable<any> {
    let url: string = `${firebaseUrl}transactions/${month}.json?orderBy=${attr}/auth=${firebaseToken}`;
    return this.http.get(url).map((res) => res.json());
  }
}
