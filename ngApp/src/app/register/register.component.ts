import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserData = {}
  constructor(private _auth : AuthService, private _router : Router) { }

  ngOnInit() {
  }
// we call the auth serveice to send the data through it to the DB
  register(){
   this._auth.registerUser(this.registerUserData)
   .subscribe(
     // save the token in the browser
     res => {
       console.log(res)
       localStorage.setItem('token',res.token)
       this._router.navigate(['/profile'])
      },
     err => console.log(err)
   )
  }

}
