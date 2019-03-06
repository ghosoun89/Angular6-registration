import { Component } from '@angular/core';
import {AuthService} from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

// api-key = '909c338e55fe4fd78079baa827a0cb4a'
export class AppComponent {
  title = 'ngApp';
  constructor(private _authService : AuthService){}
}
