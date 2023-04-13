import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav-s',
  templateUrl: './nav-s.component.html',
  styleUrls: ['./nav-s.component.css']
})
export class NavSComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  logOut(){
    this.loginService.logout();
  }
}
