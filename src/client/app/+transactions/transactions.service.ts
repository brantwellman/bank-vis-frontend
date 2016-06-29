import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TransactionsService {
  constructor(private http: Http){}

  getTransactions(fbToken: any, fbRef: any): Observable<any> {
    let url: string = fbRef + 'transactions.json?auth=' + fbToken;
    return this.http.get(url).map((res) => res.json());
  }
}
