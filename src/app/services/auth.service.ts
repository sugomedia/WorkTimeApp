import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService: HttpService ) { }

  login (formData: any): Promise<boolean>
  {
    return new Promise((resolve, reject)=>{
      this.httpService.selectByField('users', 'email', 'eq', formData.email).subscribe( 
        (response:any) => { 
            
            if ( response[0].passwd.toString() === CryptoJS.SHA1(formData.passwd).toString())
            { 
              sessionStorage.setItem('access_token', response[0].ID)
              resolve(true);
            }
            else
            {
              resolve(false);
            }
        
        },
        (error) => { console.log(error); return false; }
          
        ); 
    });
      
      }

   isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

}
