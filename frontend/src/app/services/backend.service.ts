import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Headers, RequestOptions} from '@angular/http';

const DEFAULT_URL = 'http://localhost:8080';

@Injectable()
export class BackendService {

  headers = new Headers({'Content-Type': 'application/json'});
  options = new RequestOptions({headers: this.headers});

  loggedUsername: string;
  userRole: string;

  constructor(private http: HttpClient) {
  }

  public get(url: string, request?: any): Observable<any> {
    if (!request) {
      // this.headers.append('Access-Control-Allow-Origin', '*');
      // this.options = new RequestOptions({headers: this.headers});
      return this.http.post(DEFAULT_URL + url, this.options);
    }
    return this.http.get(url, request);
  }

  public put(url: string, request?: any): Observable<any> {
    if (!request) {
      return this.http.post(DEFAULT_URL + url, this.options);
    }
    return this.http.put(DEFAULT_URL + url, request);
  }

  public post(url: string, request?: any): Observable<any> {
    if (!request) {
      return this.http.post(DEFAULT_URL + url, this.options);
    }
    return this.http.post(DEFAULT_URL + url, request);
  }


}
