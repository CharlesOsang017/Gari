import { Injectable } from '@angular/core';
import { User } from '../user.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
apiUrl  = 'https://gariworkshop.herokuapp.com/api/services/?format=api'
  constructor(private _http:HttpClient) { }

  getUsers(){
    return this._http.get<User[]>(this.apiUrl);
  }
}
