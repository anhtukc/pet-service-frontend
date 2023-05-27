import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pagination } from '../class';
import { login } from '../class';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {
  constructor(public http: HttpClient) { }
  login(acc:login) {
    return this.http.post<any>(environment.apiUrl+"Authencation/Authenticate",acc);
  }
}
