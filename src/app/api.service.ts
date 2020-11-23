import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "gariworkshop.herokuapp.com/api"
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http:HttpClient) { }

  getAllServices(): Observable<any>{
    return this.http.get(this.baseurl + '/services/', {headers: this.httpHeaders})
  }
}
