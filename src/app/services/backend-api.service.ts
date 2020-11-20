import { Injectable } from '@angular/core';
import { Services } from '../Services.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
apiUrl  = 'http://localhost:4200'
// apiUrl  = 'https://gariworkshop.herokuapp.com/'
  constructor(private _http:HttpClient) { }

  getUsers(){
    return this._http.get<Services[]>(this.apiUrl);
  }
}
