import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Service created width command: ng g service theme/config/config

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  get(url: string): Observable<any> {
    return this.http.get(url);
  }

  post(url: string, data: any) : Observable<any> {
    return this.http.post(url, data);
  }
  
  delete(url: string): Observable<any> {
    return this.http.delete(url);
  }
  
  put(url: string, data: any) : Observable<any> {
    return this.http.put(url, data);
  }

  patch(url: string, data: any) : Observable<any> {
    return this.http.patch(url, data);
  }
  
  postHeader(url: string, data: any, token: string) : Observable<any> {
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ${token}'
      })
    };
    return this.http.post(url, data, httpOptions);
  }
  
}