import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

users:User[]=[];

  constructor(private userService:UserServiceService,private router:Router) { }

  ngOnInit(): void {
    this.getUsers()
  }
  public getUsers(): void {
    this.userService.getAppointmentList().subscribe({
     next: (response: User[]) => {
        this.users = response;
        console.log(this.users);
      },
      error:(error: HttpErrorResponse) => {
        alert(error.message);
      }
  });
}
}
