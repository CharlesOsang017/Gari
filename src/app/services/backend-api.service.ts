import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
  baseurl  = 'https://gariworkshop.herokuapp.com/api';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  
  constructor(private http:HttpClient) { }

  getServices(): Observable<any> {
    return this.http.get(this.baseurl + '/services/', 
    {headers: this.httpHeaders});
  }
}
