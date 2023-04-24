import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SecretaireService } from 'src/app/services/secretaire.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-ajout-sec',
  templateUrl: './ajout-sec.component.html',
  styleUrls: ['./ajout-sec.component.css']
})
export class AjoutSecComponent implements OnInit {

  constructor(private router:Router,private userService:UserServiceService,private secretaireService:SecretaireService) { }

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

    this.userService.addSec(this.data).subscribe(data => {
      console.log(data)
    })

    this.secretaireService.addSecretaire(this.data).subscribe(data=>{
      console.log(data)
      this.form.reset();
    })

   // this.form.reset();
    
    this.router.navigate(['/doctor']);
  }

}
