import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { Appointment } from 'src/app/common/appointment';
import { Patient } from 'src/app/common/patient';
import { Therapie } from 'src/app/common/therapie';
import { AppointmentService } from 'src/app/services/appointment.service';
import { LoginService } from 'src/app/services/login.service';
import { PatientService } from 'src/app/services/patient.service';
import { TherapieService } from 'src/app/services/therapie.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-therapie-list',
  templateUrl: './therapie-list.component.html',
  styleUrls: ['./therapie-list.component.css']
})
export class TherapieListComponent implements OnInit {

  therapies: Therapie[]=[];
  therapie: Therapie=new Therapie();
  islogged:Boolean=false;
  patient:Patient=new Patient();
  constructor(private therapieService :TherapieService,private appointmentService:AppointmentService,
              private route :ActivatedRoute,private router:Router,private loginService:LoginService,private login:UserServiceService,private patientService:PatientService) { }

  ngOnInit(): void {
    this.getTherapies();
    console.log(this.loginService.loggedUser + " est conncte");
    if(this.loginService.rol=="PATIENT"){
     this.patientService.findPatientByEmail(this.loginService.loggedUser).pipe(
       map((medecin: Patient) => this.patient = medecin)
     ).subscribe();
 console.log("login role "+this.loginService.rol)
 this.islogged=this.loginService.isLoggedIn;
  }}
   getTherapies(): void {
    this.therapieService.getListeTherapie().subscribe(data => {
      this.therapies = data;
    });
  }

  add(id:number){
    if(this.islogged){
 this.router.navigate(['../appointment'], { relativeTo: this.route })}

 else{
  this.router.navigate(['../login'])
 }
}

 get(a: { value: any; }) {
  console.log(a.value);
}

 afficher(y: number, x: any) {
  //y => id de la thérapie 
  console.log(y + " " + x);
  this.therapieService.getTherapieById(y).subscribe(data => {
    console.log(this.therapie.id_t);
    this.therapie = data;
    this.therapie.star = x;


    this.therapieService.updateTherapieRate(y, this.therapie).subscribe(data => {
      //this.router.navigate(['']);

    })
  })


}
 

viewprofil(id:number) {
  
  this.router.navigate(['./therapie', id], { relativeTo: this.route });
}

 
}
