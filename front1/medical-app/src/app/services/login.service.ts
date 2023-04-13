import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from './user-auth.service';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loggedUser!:string;
public isLoggedIn: Boolean = false;
public rol!:string;

  constructor(private userAuthService: UserAuthService,private userService:UserServiceService,private router:Router) { }

 /* public login(email:string,password:string) {

    var client = email;
    var password =password;
    
    
  
     
    this.userService.login(client, password)
      .subscribe({next:(res : any) => {
        
        console.log('res',res)
      //  this.userAuthService.setToken(res.token);
       // this.userAuthService.setRole(res.role);
        //localStorage.setItem('token',res.token);
        //localStorage.setItem('role',JSON.stringify(res.user.role));
        this.loggedUser=client;
        localStorage.setItem('loggedUser',String(this.loggedUser));

       
        
      this.isLoggedIn=true;
      localStorage.setItem('isLoggedIn', String(this.isLoggedIn))//car elle est boolean
      
    },
     error: (error: HttpErrorResponse) => {
        alert("invalid user");
        console.log(error);
      }
    })
    
    }*/

    login(email:string,password:string) {

      var client = email;
      var password = password;
      
  
    this.userService.login(client, password)
        .subscribe({next:(res : any) => {
          
          console.log('res',res)
          this.userAuthService.setToken(res.token);
          this.userAuthService.setRole(res.role);
          this.loggedUser=client;
          localStorage.setItem('loggedUser',String(this.loggedUser));
          this.isLoggedIn=true;
          localStorage.setItem('isLoggedIn', String(this.isLoggedIn))//car elle est boolean
        
          
  
          const rl=res.role;
          this.rol=res.role;
          if(rl=='ADMIN'){
            this.router.navigate(['/doctor'])
          }else if(rl == 'PATIENT'){
          
          this.router.navigate(['/patient'])}
          else if(rl == 'MEDS'){
          
            this.router.navigate(['/doctorsec'])}
            else if(rl == 'SEC'){
          
              this.router.navigate(['/secretaire'])} 
        
      },
       error: (error: HttpErrorResponse) => {
          alert("invalid user");
          console.log(error);
        }
      })
        }
  
logout(){
  this.isLoggedIn = false;
  this.loggedUser = "";
  this.rol = "";
  localStorage.removeItem('loggedUser');
  localStorage.removeItem('token');
  localStorage.removeItem('role');

  localStorage.setItem('isLoggedIn',String(this.isLoggedIn));

}


}
