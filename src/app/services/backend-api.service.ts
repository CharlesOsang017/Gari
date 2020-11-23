import { Injectable } from '@angular/core';
import { Services } from '../Services.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
apiUrl  = 'https://gariworkshop.herokuapp.com/api/services/'
  constructor(private _http:HttpClient) { }

  getServices(){
    return this._http.get<Services[]>(this.apiUrl);
  }
}
