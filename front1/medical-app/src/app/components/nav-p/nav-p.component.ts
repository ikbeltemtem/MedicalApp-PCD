import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav-p',
  templateUrl: './nav-p.component.html',
  styleUrls: ['./nav-p.component.css']
})
export class NavPComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  logOut(){
    this.loginService.logout();
  }
}
