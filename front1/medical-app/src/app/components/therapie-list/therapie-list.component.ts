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
  therapie: Therapie=new Therapie();

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

  add(id:number){
 this.router.navigate(['../appointment'])
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
