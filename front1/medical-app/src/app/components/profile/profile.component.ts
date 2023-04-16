import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Doctor } from 'src/app/common/doctor';
import { Secretaire } from 'src/app/common/secretaire';
import { DoctorService } from 'src/app/services/doctor.service';
import { LoginService } from 'src/app/services/login.service';
import { SecretaireService } from 'src/app/services/secretaire.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
medecin:Doctor | undefined;
secretaire:Secretaire | undefined;
idm!:number;
ids!:number;
  constructor(private router:Router,private userService:UserServiceService,private doctorService :DoctorService,private secretaireService :SecretaireService,private activatedRoute:ActivatedRoute,private loginService:LoginService) { }

  ngOnInit(): void {
    console.log(this.loginService.loggedUser + " est conncte");
    if(this.loginService.rol=="ADMIN" || this.loginService.rol=="MEDS"){
      console.log("login role "+this.loginService.rol)
      this.getMedecin();
    }else if(this.loginService.rol=="SEC"){
      console.log("login role "+this.loginService.rol)
      this.getSec();
    }
  }

  getMedecin(){
    this.doctorService.findMedecinByEmail(this.loginService.loggedUser).pipe(
      map((medecin: Doctor) => this.medecin = medecin)
    ).subscribe()
  }
  getSec(){
    this.secretaireService.findSecByEmail(this.loginService.loggedUser).pipe(
      map((secretaire: Secretaire) => this.secretaire =secretaire)
    ).subscribe()
  }

  modifierMedecin(mail:string,id:number){
    this.router.navigate(['../modifierMedecin',mail],{relativeTo:this.activatedRoute});
  }

  modifierSecretaire(mail:string,id:number){
    this.router.navigate(['../modifierSecretaire',mail],{relativeTo:this.activatedRoute});
  }
}
