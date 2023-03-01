import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {}
  
  aktYear = new Date().getFullYear();

  loginform = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    passwd: new FormControl('', Validators.required)
  });

  login() {
    console.log(this.loginform.value);

    let isValid = this.loginform.valid;
    if (!isValid)
    {
         this.loginform.setErrors({
          errorinfo: 'Invalid login creditials!'
         })
    }
    else
    {
      this.router.navigate(['/dashboard']);
    }
  }

  get email(){
    return this.loginform.get('email');
  }

  get passwd(){
    return this.loginform.get('passwd');
  }
}
