import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private _registerUrl ='http://localhost:3000/api/register'
 private _loginUrl ='http://localhost:3000/api/login'
  constructor(private http : HttpClient, private _router: Router) { }

// this function to send the userdata to backend by using the  url of the backend and user info
  registerUser(user){
    return this.http.post<any>(this._registerUrl,user)
  }

  loginUser(user){
    return this.http.post<any>(this._loginUrl,user)
  }
// to check if the token exist in the browser then return true or false
// and this method we will use it in the auth guard to control the navigation
  loggedIn() {
    return !!localStorage.getItem('token')
  }

  LogoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/home'])
  }
}
