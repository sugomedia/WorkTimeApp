import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, public auth: AuthService) {}
  
  aktYear = new Date().getFullYear();

  loginform = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    passwd: new FormControl('', Validators.required)
  });

  login() {
    
    this.auth.login(this.loginform.value).then(res => {
      
      if (!res)
      {
          this.loginform.setErrors({
            errorinfo: 'Invalid login creditials!'
          })
      }
      else
      {
        this.router.navigate(['/dashboard']);
      }
    
    });
    
  }

  get email(){
    return this.loginform.get('email');
  }

  get passwd(){
    return this.loginform.get('passwd');
  }
}
