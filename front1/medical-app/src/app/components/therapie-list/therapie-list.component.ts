import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/common/appointment';
import { Therapie } from 'src/app/common/therapie';
import { AppointmentService } from 'src/app/services/appointment.service';
import { TherapieService } from 'src/app/services/therapie.service';

@Component({
  selector: 'app-therapie-list',
  templateUrl: './therapie-list.component.html',
  styleUrls: ['./therapie-list.component.css']
})
export class TherapieListComponent implements OnInit {

  therapies: Therapie[]=[];
  

  constructor(private therapieService :TherapieService,private appointmentService:AppointmentService,
              private route :ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.getTherapies();
  }
   getTherapies(): void {
    this.therapieService.getListeTherapie().subscribe(data => {
      this.therapies = data;
    });
  }

  add(){
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#addAppointmentModal');
    container!.appendChild(button);
    button.click();

    
 }

 public onAddAppointment(addForm: NgForm): void {
  document.getElementById('add-Rdv-form')!.click();
  this.appointmentService.addAppointment(addForm.value).subscribe({
    next : (response: Appointment) => {
      console.log(response);
      this.getTherapies();
      addForm.reset();
    },
    error : (error: HttpErrorResponse) => {
      alert(error.message);
      addForm.reset();
    }
});
}

 /* afficher(y: any, x: any) {
    //y => id de la thérapie 
    console.log(y + " " + x);
    this.therapieService.getTherapieById(y).subscribe(data => {
      this.therapie = data;
      //this.therapie.starRating = x;


      /*this.therapieService.updateTherapieRate(y, this.therapie).subscribe(data => {
        //this.router.navigate(['']);

      })
    })

}*/
}
