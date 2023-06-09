import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { UserServiceService } from 'src/app/services/user-service.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
model:any={};


  constructor(private router:Router, private userAuthService: UserAuthService,private userService:UserServiceService,private loginService:LoginService) { }

  ngOnInit(): void {
  }

 /* loginUser() {

    var client = this.model.email;
    var password = this.model.password;
    

  this.userService.login(client, password)
      .subscribe({next:(res : any) => {
        
        console.log('res',res)
        this.userAuthService.setToken(res.token);
        this.userAuthService.setRole(res.role);
        //localStorage.setItem('token',res.token);
        //localStorage.setItem('role',JSON.stringify(res.user.role));
      
        

        const rl=res.role;
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
      }*/


      loginUser() {

        var client = this.model.email;
        var password = this.model.password;
        this.loginService.login(client,password);
      
      }
        
        
    
     
}
