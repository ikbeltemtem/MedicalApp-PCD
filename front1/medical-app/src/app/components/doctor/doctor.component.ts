import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/common/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
   doctors: Doctor[]=[];
   public deleteDoctor!:Doctor|null;
   public editDoctor! : Doctor|null;

  constructor(private doctorService: DoctorService,
               private router:Router) { }

  ngOnInit(): void {
    this.getDoctors();
  }
  


  public getDoctors(): void {
    this.doctorService.getDoctorList().subscribe({
     next: (response: Doctor[]) => {
        this.doctors = response;
        console.log(this.doctors);
      },
      error:(error: HttpErrorResponse) => {
        alert(error.message);
      }
  });
  }
  public onUpdateDoctor(doctor: Doctor): void {
    this.editDoctor = doctor;
    this.doctorService.updateDoctor(this.editDoctor.id,this.editDoctor).subscribe({
      next : (response: Doctor) => {
        console.log(response);
        this.getDoctors();
      },
      error : (error: HttpErrorResponse) => {
        alert(error.message);
      }
  });
}


  public onAddDoctor(addForm: NgForm): void {
    document.getElementById('add-doctor-form')!.click();
    this.doctorService.addDoctor(addForm.value).subscribe({
      next : (response: Doctor) => {
        console.log(response);
        this.getDoctors();
        addForm.reset();
      },
      error : (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
  });
  }
  public add(){
    this.router.navigate(['/ajouterMedecin']);
  }

  public onOpenModal(doctor: Doctor , mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addDoctorModal');
    }
    if (mode === 'edit') {
      this.editDoctor = doctor;
      button.setAttribute('data-target', '#editDoctorModal');
    }
    if (mode === 'delete') {
      this.deleteDoctor = doctor;
      button.setAttribute('data-target', '#deleteDoctorModal');
    }
    container!.appendChild(button);
    button.click();
  }


  public onDeleteDoctor(doctorId: any): void {
    this.doctorService.deleteDoctor(doctorId).subscribe({
    next:  (response: void) => {
        console.log(response);
        this.getDoctors();
      },
      error:(error: HttpErrorResponse) => {
        alert(error.message);
      }
  });
  }
}
