import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/common/appointment';
import { Therapie } from 'src/app/common/therapie';
import { AppointmentService } from 'src/app/services/appointment.service';
import { SecretaireService } from 'src/app/services/secretaire.service';
import { TherapieService } from 'src/app/services/therapie.service';



@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
public therapies!:Therapie[];
therapie!:Therapie;
  id!:number;
  x:number=0;
rendezvous!:Appointment;
  constructor(private router:Router,private therapieService:TherapieService,private SecService:SecretaireService,private appointmentService:AppointmentService,private route:ActivatedRoute) { }

  ngOnInit(): void {
  //this.getTherapies();
   /* this.id=this.route.snapshot.params['id'];
    this.therapieService.getTherapieById(this.id).subscribe(data =>{
      this.therapie=data;
    })*/
  }

  getTherapies():void{
    this.therapieService.getListeTherapie().subscribe(data=>{
      this.therapies=data;
    });
  }

  onSubmit(addForm: NgForm){
    this.appointmentService.addAppointment(addForm.value).subscribe(data=>{
     console.log(data);
     
     this.router.navigate(['patient']);
 
   });
 
   }

   /*public onAddAppointment(addForm: NgForm): void {
    document.getElementById('add-Rdv-form')!.click();
    this.x=this.x +1;
    this.appointmentService.addAppointment(addForm.value).subscribe({
      next : (response: Appointment) => {
        console.log(response);
        this.getAppointments();
        addForm.reset();
      },
      error : (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
  });
  }*/

}
