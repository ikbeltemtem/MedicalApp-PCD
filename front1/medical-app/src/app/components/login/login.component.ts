import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
model:any={};
  constructor(private router:Router,private userService:UserServiceService) { }

  ngOnInit(): void {
  }

  loginUser() {

    var client = this.model.email;
    var password = this.model.password;
    
  
     
    this.userService.login(client, password)
      .subscribe({next:(res : any) => {
        
        console.log('res',res)
        localStorage.setItem('token',res.token)
        
        this.router.navigate(['/home'])
      },
     error: (error: HttpErrorResponse) => {
        alert("invalid user");
        console.log(error);
      }
    })
      }
}
