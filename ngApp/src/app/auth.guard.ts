import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
// we enject auth method for the logedin and the router for the navigation
export class AuthGuard implements CanActivate {
  constructor(private _authService : AuthService,
    private _router : Router){}

    // check if the token is exist in the browser then return true and complete to 
    // the profile if it is not exist redirect it to the login again

    canActivate(): boolean {
      if(this._authService.loggedIn()){
        return true
      }else{
        this._router.navigate(['/login'])
        return false
      }
    }
 
}
