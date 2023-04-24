import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Secretaire } from 'src/app/common/secretaire';
import { User } from 'src/app/common/user';
import { SecretaireService } from 'src/app/services/secretaire.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-modif-sec',
  templateUrl: './modif-sec.component.html',
  styleUrls: ['./modif-sec.component.css']
})
export class ModifSecComponent implements OnInit {
secretaire:Secretaire=new Secretaire();
user!:User;
email!:string;
id!:number;

  constructor(private secretaireService:SecretaireService,private route:ActivatedRoute,private router:Router,private userService:UserServiceService) { }

  ngOnInit(): void {
      this.email=this.route.snapshot.params['email'];
      this.secretaireService.findSecByEmail(this.email).subscribe(data=>{
        this.secretaire=data;
       
      })
  }

 

onSubmit(){
  this.secretaireService.updateSecretaire(this.secretaire.id,this.secretaire).subscribe(data=>{
    if(this.userService.isMedP()){
     
      this.userService.updateSec(this.email,this.secretaire).subscribe(data=>{
        this.router.navigate(['doctor']);
      })
      
    }
    else{
     
      this.userService.updateSec(this.email,this.secretaire).subscribe(data=>{
        this.router.navigate(['secretaire']);
         })
  

    }
  
    
  })
}

}
