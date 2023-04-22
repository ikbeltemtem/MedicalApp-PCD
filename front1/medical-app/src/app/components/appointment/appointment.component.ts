import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/common/appointment';
import { Notif } from 'src/app/common/notif';
import { Static } from 'src/app/common/static';
import { Therapie } from 'src/app/common/therapie';
import { AppointmentService } from 'src/app/services/appointment.service';
import { NotifService } from 'src/app/services/notif.service';
import { SecretaireService } from 'src/app/services/secretaire.service';
import { StaticService } from 'src/app/services/static.service';
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
  statistics:Static[]=[];

rendezvous!:Appointment;
  public notif: Notif=new Notif();
  constructor(private router:Router,private therapieService:TherapieService,private staticService:StaticService,private notifService:NotifService,private appointmentService:AppointmentService,private route:ActivatedRoute) { }

  ngOnInit(): void {
this.getStatics();
  }

  getTherapies():void{
    this.therapieService.getListeTherapie().subscribe(data=>{
      this.therapies=data;
    });
  }

  onSubmit(addForm: NgForm){
    console.log(addForm.value);

    this.notif.name=addForm.value.name;
    this.notif.prenom=addForm.value.prenom;
    this.notif.email=addForm.value.email;
    this.notif.dispo1=addForm.value.dispo1;
    this.notifService.createNotif(this.notif).subscribe(data=>{
      console.log(data);
  
    });
    this.appointmentService.addAppointment(addForm.value).subscribe(data=>{
     console.log(data);
     
     this.router.navigate(['patient']);
 
   });
   this.statistics[1].amount++;
   this.staticService.updateStat(2,this.statistics[1]).subscribe(data=>{
   
          })
 
   }

   public getStatics(): void {
    this.staticService.getStat().subscribe({
     next: (response: Static[]) => {
        this.statistics = response;
        console.log(this.statistics);
      },
      error:(error: HttpErrorResponse) => {
        alert(error.message);
      }
  });
  }

}
