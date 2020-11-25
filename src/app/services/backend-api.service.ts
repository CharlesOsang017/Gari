import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../Models/user';
import { map, catchError } from 'rxjs/operators';
import {Router} from '@angular/router';
import { Observable, throwError, BehaviorSubject } from 'rxjs';

const headers = new HttpHeaders({'content-type': 'application/json', 'Authorization': 'Bearer ' +  localStorage.getItem('jwt') });
const options = { headers: headers };

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
  
  baseurl  = 'https://gariworkshop.herokuapp.com/api';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  username:string;

  constructor(private http:HttpClient, private router:Router) { }
  private loginStatus = new BehaviorSubject <boolean>(this.checkLoginStatus());
  private UserName = new BehaviorSubject <string>(localStorage.getItem('username'));
  private UserRole = new BehaviorSubject <string>(localStorage.getItem('userRole'));

     register(user: User) {
      return this.http.post(`https://gariworkshop.herokuapp.com/api/register/`, user);
    }
  
  login(username, password) {
    return this.http.post<any>(`https://gariworkshop.herokuapp.com/api/login/`, { username, password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        // localStorage.setItem('currentUser', JSON.stringify(user.id));
        if (user && user.access)
        {

          this.loginStatus.next(true);
          localStorage.setItem('loginStatus', '1');
          localStorage.setItem('username', user.username);
          localStorage.setItem('expiration', user.expiration);
          localStorage.setItem('userRole', user.userRole);
          localStorage.setItem('jwt', user.access);
          this.UserName.next(localStorage.getItem('username'));
          this.UserRole.next(localStorage.getItem('userRole'));
        }
        // this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
          this.loginStatus.next(false);          
          localStorage.removeItem('jwt');
          // localStorage.removeItem('token');
          localStorage.removeItem('userRole');
          localStorage.removeItem('username');
          localStorage.removeItem('expiration');
          localStorage.setItem('loginStatus','0');

          this.router.navigate(['/login']);
          console.log("Logged out successfully")
  }

  checkLoginStatus(): boolean
  {
    let loginCookie = localStorage.getItem("loginStatus");
    if(loginCookie == "1")
    {
      return true;
    }
  }
 
  get isLoggedIn()
  {
    return this.loginStatus.asObservable();
  }
 
  get currentUserName()
  {
    
    return this.UserName.asObservable();
  }
 
  get currentUserRole()
  {
    return this.UserRole.asObservable();
  }

  getUser() {
    // add authorization header with jwt token
    
    return this.http.get('https://gariworkshop.herokuapp.com/api/user', options);
}

  getServices(): Observable<any> {
    return this.http.get(this.baseurl + '/services/', 
    {headers: this.httpHeaders});
  }
}


