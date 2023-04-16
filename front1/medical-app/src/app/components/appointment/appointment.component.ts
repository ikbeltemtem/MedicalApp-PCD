import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/common/appointment';
import { Therapie } from 'src/app/common/therapie';
import { AppointmentService } from 'src/app/services/appointment.service';
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
rendezvous!:Appointment;
  constructor(private router:Router,private therapieService:TherapieService,private appointmentService:AppointmentService,private route:ActivatedRoute) { }

  ngOnInit(): void {
   
    this.id=this.route.snapshot.params['id'];
    this.therapieService.getTherapieById(this.id).subscribe(data =>{
      this.therapie=data;
    })
  }

  getTherapies():void{
    this.therapieService.getListeTherapie().subscribe(data=>{
      this.therapies=data;
    });
  }

  onSubmit(){
    this.appointmentService.addAppointment(this.rendezvous).subscribe(data=>{
     console.log(data);
     this.router.navigate(['patient']);
 
   })
   }
}
