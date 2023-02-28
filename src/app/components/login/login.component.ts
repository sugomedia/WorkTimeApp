import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {}
  
  aktYear = new Date().getFullYear();

  login() {
    this.router.navigate(['/dashboard']);
  }
}
