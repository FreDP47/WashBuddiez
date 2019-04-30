import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Response} from '../models/model.interface';
import {environment} from '../../environments/environment';

@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  isAuthenticated(token): Observable<Response> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-auth': `${token}`
      })
    };
    return this.httpClient.get<Response>(
      `${environment.api_url}/authenticate`,
      httpOptions
    );
  }
}