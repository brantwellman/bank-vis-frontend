import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TransactionsService {
  constructor(private http: Http){}

  getTransactions(){
    return this.makeRequest();
  }

  private makeRequest(){
    let url: string = 'someurl';
    return this.http.get(url)
      .map((res) => res.json());
  }
}
