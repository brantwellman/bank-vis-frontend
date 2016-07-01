import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserService {
  public apiUrl: string;

  constructor(public http: Http) {
    this.apiUrl = 'http://localhost:3000/api/v1';
  }

  public login(form: any): Observable<any> {
    let url = this.apiUrl + '/authenticate';
    let headers = this.createHeaders();
    let body = JSON.stringify(form);
    return this.http.post(url, body, {headers: headers}).map((res: Response) => res.json());
  }

  public create(form: any): Observable<any> {
    let url = this.apiUrl + '/users';
    let headers = this.createHeaders();
    let body = JSON.stringify({user: form});
    return this.http.post(url, body, {headers: headers}).map((res: Response) => res.json());
  }

  private createHeaders(): any {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}
