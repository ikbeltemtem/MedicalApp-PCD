import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/common/doctor';
import {User} from 'src/app/common/user';
import { DoctorService } from 'src/app/services/doctor.service';
import { UserServiceService } from 'src/app/services/user-service.service';


@Component({
  selector: 'app-ajout-med',
  templateUrl: './ajout-med.component.html',
  styleUrls: ['./ajout-med.component.css']
})
export class AjoutMedComponent implements OnInit {

medecin!:Doctor;
user!:User;
  constructor(private router:Router,private userService:UserServiceService,private doctorService:DoctorService) { }

  ngOnInit(): void {
  }

  addMed(){
    console.log("heyyy")
    this.doctorService.addDoctor(this.medecin).subscribe(data=>{
      this.user.email=data.email;
      this.user.password=data.password;
      console.log(data);
      this.userService.addMed(this.user).subscribe(data=>
        console.log(data));
    })
  }

  onSubmit() {
    this.addMed();
  }

}
