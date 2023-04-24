import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/common/doctor';
import { DoctorService } from 'src/app/services/doctor.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-modif-meds',
  templateUrl: './modif-meds.component.html',
  styleUrls: ['./modif-meds.component.css']
})
export class ModifMedsComponent implements OnInit {
  doctor:Doctor=new Doctor();
  //user!:User;
  email!:string;
  id!:number;
  constructor(private route:ActivatedRoute,private router:Router,private doctorService:DoctorService,private userService:UserServiceService) { }

  ngOnInit(): void {
    this.email=this.route.snapshot.params['email'];
      this.doctorService.findMedecinByEmail(this.email).subscribe(data=>{
        this.doctor=data;
       
      })
  }

  onSubmit(){
    this.doctorService.updateDoctor(this.doctor.id,this.doctor).subscribe(data=>{
      if(this.userService.isMedP()){
       
        this.userService.updateMed(this.email,this.doctor).subscribe(data=>{
          this.router.navigate(['doctor']);
        })
        
      }
      else{
       
        this.userService.updateMed(this.email,this.doctor).subscribe(data=>{
          this.router.navigate(['doctorsec']);
           })
    
  
      }
    
      
    })
  }
  

}
