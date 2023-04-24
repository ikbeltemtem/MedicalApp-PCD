import { Component, OnInit } from '@angular/core';
import { Therapie } from 'src/app/common/therapie';
import { TherapieService } from 'src/app/services/therapie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Appointment } from 'src/app/common/appointment';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from 'src/app/common/comment';
import { LoginService } from 'src/app/services/login.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { PatientService } from 'src/app/services/patient.service';
import { Patient } from 'src/app/common/patient';
import { map } from 'rxjs';
@Component({
  selector: 'app-therapie',
  templateUrl: './therapie.component.html',
  styleUrls: ['./therapie.component.css']
})
export class TherapieComponent implements OnInit {
  comment:Comment=new Comment();
  comments:Comment[]=[];
  therapie:Therapie=new Therapie();
  id!:number;
  islogged:Boolean=false;
  patient:Patient=new Patient();
  constructor(private therapiService: TherapieService,private appointmentService:AppointmentService,private commentService:CommentService,
    private route: ActivatedRoute,private router:Router,private loginService:LoginService,private login:UserServiceService,private patientService:PatientService) { this.getPatient()}


     ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.therapiService.getTherapieById(this.id).subscribe(data =>{
      console.log(data);
      this.therapie=data;
      console.log(this.therapie.name);
      this.comment.therapie=this.therapie.name;
      this.commentService.getCommentByThId(this.therapie.name).subscribe(dat => {
        this.comments=dat;
      });
    });
    console.log(this.loginService.loggedUser + " est conncte");
     if(this.loginService.rol=="PATIENT"){
      this.patientService.findPatientByEmail(this.loginService.loggedUser).pipe(
        map((medecin: Patient) => this.patient = medecin)
      ).subscribe();
  console.log("login role "+this.loginService.rol)
  this.islogged=this.loginService.isLoggedIn;
}
}
  onSubmit(addForm: NgForm){
    if(this.login.isPatient()){
    this.comment.text=addForm.value.text;
     //this.comment.therapie=this.therapie.name;
    
     
     this.comment.email=this.patient.email;
    
    this.commentService.createComment(this.comment).subscribe(data=>{
     console.log(data);
     this.router.navigate(['patient']);
  
   });
  
   }}
  add(){
    this.router.navigate(['../../appointment'], { relativeTo: this.route });
   
       
    }

  getPatient(){
    this.patientService.findPatientByEmail(this.loginService.loggedUser).pipe(
      map((medecin: Patient) => this.patient = medecin)
    ).subscribe()
  }
}
