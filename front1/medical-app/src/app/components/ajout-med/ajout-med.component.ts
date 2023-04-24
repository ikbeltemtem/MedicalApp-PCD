import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

medecin:Doctor=new Doctor();
user:User=new User();
  constructor(private router:Router,private userService:UserServiceService,private doctorService:DoctorService) { }

  ngOnInit(): void {
  }

  addMed(){
    console.log("heyyy")
    this.doctorService.addDoctor(this.medecin).subscribe(data=>{
      this.user.firstname=data.firstname;
      this.user.lastname=data.lastname;
      this.user.age=data.age.toString();
      this.user.adresse=data.adresse;
      this.user.speciality=data.speciality;
      this.user.email=data.email;
      this.user.password=data.password;
      console.log(data);
      this.userService.addMed(this.user).subscribe(data=>
        console.log(data));
        this.router.navigate(['doctors']);
    })
  }

  onSubmit() {
    this.addMed();
  }

  data: any

  form = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    adresse : new FormControl('', [Validators.required]),
    tel: new FormControl('', [Validators.required]),
    speciality: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })


  submit(){
    this.data = this.form.value;
   // this.x=this.x +1;
    console.log(this.data)

    this.userService.addMed(this.data).subscribe(data => {
      console.log(data)
    })

    this.doctorService.addDoctor(this.data).subscribe(data=>{
      console.log(data)
      this.form.reset();
    })

   // this.form.reset();
    
    this.router.navigate(['/doctor']);
  }

}
