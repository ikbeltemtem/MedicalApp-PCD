import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
import { Appointment } from '../common/appointment';
import { Notif } from '../common/notif';
import { Patient } from '../common/patient';
import { Secretaire } from '../common/secretaire';
import { NotifService } from './notif.service';
import { PatientService } from './patient.service';
import { SecretaireService } from './secretaire.service';
import { UserAuthService } from './user-auth.service';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loggedUser!:string;
public isLoggedIn: Boolean = false;
public rol!:string;
secretaire:Secretaire | undefined;
patient:Patient=new Patient();

public notifs:Notif[]=[];


  constructor(private userAuthService: UserAuthService,private notifService:NotifService,private toastr:ToastrService,private userService:UserServiceService,private router:Router,private secService:SecretaireService,private patService:PatientService) { 
    this.getNotifs();
   
  }

 

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
            this.router.navigate(['/doctor']);
            this.toastr.success('Welcome!!!!!')
          }else if(rl == 'PATIENT'){
          this.getPatient();
          this.router.navigate(['/patient']);
    
          this.toastr.success('Welcome!!!!!  '+this.patient.firstname)}
          else if(rl == 'MEDS'){
          
            this.router.navigate(['/doctorsec'])}
            else if(rl == 'SEC'){
             
              console.log(this.notifs[0].dispo1);
              this.router.navigate(['/secretaire']);
              this.toastr.success(this.notifs[0].dispo1);
              } 
        
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

getSec(){
  this.secService.findSecByEmail(this.loggedUser).pipe(
    map((secretaire: Secretaire) => this.secretaire =secretaire)
  ).subscribe()
}

getPatient(){
  this.patService.findPatientByEmail(this.loggedUser).pipe(
    map((medecin: Patient) => this.patient = medecin)
  ).subscribe()
}

getNotifs():void{
   this.notifService.getListeNotif().subscribe(data=>{
    this.notifs=data;
   });
  
  }
}

