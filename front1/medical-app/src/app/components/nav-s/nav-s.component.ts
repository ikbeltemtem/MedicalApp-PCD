import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { NotifService } from 'src/app/services/notif.service';

@Component({
  selector: 'app-nav-s',
  templateUrl: './nav-s.component.html',
  styleUrls: ['./nav-s.component.css']
})
export class NavSComponent implements OnInit {

  constructor(private loginService:LoginService,private notifService:NotifService) { }

  ngOnInit(): void {
  }

  logOut(){
    this.loginService.logout();
    this.notifService.deleteAll();
    this.notifService.deleteAll().subscribe({
     
    });
  }
}
