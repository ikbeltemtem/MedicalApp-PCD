import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  x:number=0;
  constructor(private service:UserServiceService,private router:Router,private patientService:PatientService) { }

  ngOnInit(): void {
  }


  data: any

  form = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    adresse : new FormControl('', [Validators.required]),
    tel: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })


  submit(){
    this.data = this.form.value;
   // this.x=this.x +1;
    console.log(this.data)

    this.service.adduser(this.data).subscribe(data => {
      console.log(data)
    })

    
    this.patientService.addPatient(this.data).subscribe(data=>{
      console.log(data)
      this.form.reset();
    })
    
    this.router.navigate(['/login']);
  }
  

}
