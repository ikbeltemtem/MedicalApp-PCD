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
message:string="";

  constructor(private userAuthService: UserAuthService,private notifService:NotifService,private toastr:ToastrService,private userService:UserServiceService,private router:Router,private secService:SecretaireService,private patService:PatientService) { 
    this.getNotifs();
    console.log(this.notifs);
   
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
             
             
             
              this.router.navigate(['/secretaire']);
              for(let nt of this.notifs){
                this.toastr.success(this.getMsg(nt) );
              }
              this.notifs=[];
             
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
  this.router.navigate(['./navbar']);


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
 getMsg(nott:Notif):string{
 
     this.message="Un nouveau Rendez-vous pris en: "+nott.daterdv + "\n"
     + "sous le nom: "+nott.name + " pour le: "+nott.dispo1 + "\n" + "Verifier sa disponibilité!";
  return this.message;
 }

 deleteNotif():void{
  for(let n of this.notifs){
    this.notifService.deleteNotif(n.id);
  }
  
 }
}

