import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as lodash from 'lodash';

@Injectable()
export class HttpService {
  public authFail: Boolean = false;

  constructor(
    private http: HttpClient
  ) { }

  public get(url, options?): Observable<any> {
    return this.http.get(url, options);
  }

  public post(url, data = null, options?): Observable<any> {
    return this.http.post(url, data, options);
  }

  public postFile(url, data, options = {}): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    return this.http.post(url, data, lodash.merge({}, options, { headers }));
  }

  public put(url, data = null, options?): Observable<any> {
    return this.http.put(url, data, options);
  }

  public del(url, options?): Observable<any> {
    return this.http.delete(url, options);
  }
}
