import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/common/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
   appointments: Appointment[]=[];
   public deleteAppointment!:Appointment|null;
   public editAppointment! : Appointment|null;
  // x:number=0;
   _arrivelist!: arrive[];
   x!: string;
   getarrive() {
     this._arrivelist = [
       { id: 1, name: "en cours", isselected: false },
       { id: 2, name: "en attente", isselected: false },
       { id: 3, name: "pas arrivee", isselected: false }
     ]
   }
 

  constructor(private appointmentService: AppointmentService,
               private router:Router) { }

  ngOnInit(): void {
    this.getAppointments();
    this.getarrive();

  }
  


  public getAppointments(): void {
    this.appointmentService.getAppointmentList().subscribe({
     next: (response: Appointment[]) => {
        this.appointments = response;
        console.log(this.appointments);
      },
      error:(error: HttpErrorResponse) => {
        alert(error.message);
      }
  });
  }
  public onUpdateAppointment(appointment: Appointment): void {
    this.editAppointment = appointment;
    this.appointmentService.updateAppointment(this.editAppointment.id,this.editAppointment).subscribe({
      next : (response: Appointment) => {
        console.log(response);
        this.getAppointments();
      },
      error : (error: HttpErrorResponse) => {
        alert(error.message);
      }
  });
}


  public onAddAppointment(addForm: NgForm): void {
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
  }

  public add(){
    this.router.navigate(['/appointment']);
  }

  public onOpenModal(appointment: Appointment , mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addAppointmentModal');
    }
    if (mode === 'edit') {
      this.editAppointment = appointment;
      button.setAttribute('data-target', '#editAppointmentModal');
    }
    if (mode === 'delete') {
      this.deleteAppointment = appointment;
      button.setAttribute('data-target', '#deleteAppointmentModal');
    }
    container!.appendChild(button);
    button.click();
  }


  public onDeleteAppointment(appointmentId: any): void {
    this.appointmentService.deleteAppointment(appointmentId).subscribe({
    next:  (response: void) => {
        console.log(response);
        this.getAppointments();
      },
      error:(error: HttpErrorResponse) => {
        alert(error.message);
      }
  });
  }

  onchange() {

    this.x = this._arrivelist.filter(x => x.isselected == true).map(x => x.name).toString();
    this.editAppointment!.arrivee = this.x;
    console.log(this.editAppointment!.arrivee);
  }
}

class arrive {
  id!: number;
  name!: string;
  isselected!: boolean;
}
