import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav-mp',
  templateUrl: './nav-mp.component.html',
  styleUrls: ['./nav-mp.component.css']
})
export class NavMPComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }
  logOut(){
    this.loginService.logout();
  }
}
