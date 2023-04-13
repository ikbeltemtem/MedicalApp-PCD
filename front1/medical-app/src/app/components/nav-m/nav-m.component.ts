import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav-m',
  templateUrl: './nav-m.component.html',
  styleUrls: ['./nav-m.component.css']
})
export class NavMComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }
 
  logOut(){
    this.loginService.logout();
  }

  
}
