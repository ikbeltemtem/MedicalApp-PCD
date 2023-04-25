import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { Appointment } from 'src/app/common/appointment';
import { Patient } from 'src/app/common/patient';
import { AppointmentService } from 'src/app/services/appointment.service';
import { LoginService } from 'src/app/services/login.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-my-rdv',
  templateUrl: './my-rdv.component.html',
  styleUrls: ['./my-rdv.component.css']
})
export class MyRdvComponent {
  appointments: Appointment[]=[];
  patient:Patient=new Patient();

  _arrivelist!: arrive[];
   x!: string;
   getarrive() {
     this._arrivelist = [
       { id: 1, name: "en cours", isselected: false },
       { id: 2, name: "en attente", isselected: false },
       { id: 3, name: "pas arrivee", isselected: false }
     ]
   }
  constructor(private appointmentService: AppointmentService,private route:ActivatedRoute,private loginService:LoginService,private patientService:PatientService,
    private router:Router) { }

ngOnInit(): void {
  console.log(this.loginService.loggedUser + " est conncte");
  if(this.loginService.rol=="PATIENT"){
   this.patientService.findPatientByEmail(this.loginService.loggedUser).subscribe({
    next:(response:Patient)=>{
      this.patient=response;console.log(this.patient);
      this.getAppointments(this.patient.email)
    }
   });
   
   this.getarrive();
   
   

   
console.log("login role "+this.loginService.rol)

}

}
public getAppointments(email:string): void {
  this.appointmentService.findAppointByEmail(email).subscribe({
   next: (response: Appointment[]) => {
      this.appointments = response;
      console.log(this.appointments);
    },
    error:(error: HttpErrorResponse) => {
      alert(error.message);
    }
});
}
}


class arrive {
  id!: number;
  name!: string;
  isselected!: boolean;
}