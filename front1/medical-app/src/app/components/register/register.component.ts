import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Static } from 'src/app/common/static';
import { PatientService } from 'src/app/services/patient.service';
import { StaticService } from 'src/app/services/static.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  x:number=0;
  statistics:Static[]=[];
  constructor(private service:UserServiceService, private staticService:StaticService,private router:Router,private patientService:PatientService) { }

  ngOnInit(): void {
    this.getStatics();
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
    this.statistics[0].amount++;
    this.staticService.updateStat(1,this.statistics[0]).subscribe(data=>{
    
           })
    
    
    this.patientService.addPatient(this.data).subscribe(data=>{
      console.log(data)
      this.form.reset();
    })
    
    this.router.navigate(['/login']);
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
