import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Store, Reducer, Action} from '@ngrx/store';

export const currentUser: Reducer<any> = (state = {}, action: Action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

@Injectable()
export class UserService {
  public apiUrl: string;
  public token: string;
  public currentUser: Observable<any>;

  constructor(public http: Http, private store: Store<any>) {
    this.apiUrl = 'http://localhost:3000/api/v1';
    this.currentUser = this.store.select('currentUser');
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

  public setCurrentUser(data: any): void {
    console.log(data);
    this.store.dispatch({type: 'SET_CURRENT_USER', payload: data})
  }

  private createHeaders(): any {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.token);
    return headers;
  }
}
