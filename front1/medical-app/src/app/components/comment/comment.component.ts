import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from 'src/app/common/comment';
import { FormGroup, NgForm } from '@angular/forms';
import { User } from 'src/app/common/user';
import { UserServiceService } from 'src/app/services/user-service.service';
import { LoginService } from 'src/app/services/login.service';
import { PatientService } from 'src/app/services/patient.service';
import { Patient } from 'src/app/common/patient';
import { map } from 'rxjs';
import { Therapie } from 'src/app/common/therapie';
import { TherapieService } from 'src/app/services/therapie.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit{
comment:Comment=new Comment();
comments:Comment[]=[];
therapie:Therapie=new Therapie();
  id!:number;
patient!:Patient;
form!: FormGroup;
constructor(private commentService:CommentService,private login:UserServiceService,private loginService:LoginService,
  private router:Router,private patientService:PatientService,private route:ActivatedRoute,private therapiService:TherapieService) { this.getComments()}

ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
    this.therapiService.getTherapieById(this.id).subscribe(data =>{
      this.therapie=data;
      console.log(this.therapie.name)
    })
   /* this.commentService.getCommentByThId(this.therapie.name).subscribe(data => {
      this.comments=data;
      console.log("yessss" + this.comments)
    });*/
//this.getComments(this.therapie.name);

console.log(this.loginService.loggedUser + " est conncte");
if(this.loginService.rol=="PATIENT"){
  console.log("login role "+this.loginService.rol)
  this.getPatient();
}
}

getComments(): void {
  this.commentService.getCommentByThId(this.therapie.name).subscribe(data => {
    this.comments=data;
  });
}

onSubmit(addForm: NgForm){
  if(this.login.isPatient()){
   this.comment.text=addForm.value.text;
   this.comment.therapie=this.therapie.name;
   this.comment.email=this.patient.email;
   
  this.commentService.createComment(this.comment).subscribe(data=>{
   console.log(data);
   this.router.navigate(['patient']);

 })
 }}

 getPatient(){
  this.patientService.findPatientByEmail(this.loginService.loggedUser).pipe(
    map((medecin: Patient) => this.patient = medecin)
  ).subscribe()
}
}
