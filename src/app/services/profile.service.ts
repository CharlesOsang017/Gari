import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserProfile } from '../profile.model';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
    apiUrl  = 'https://gariworkshop.herokuapp.com/api'
      constructor(private _http:HttpClient) { }
    
      getUserProfile(){
        return this._http.get<UserProfile[]>(this.apiUrl + '/users/0/profile');
        
      }
    }