import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Therapie } from 'src/app/common/therapie';
import { TherapieService } from 'src/app/services/therapie.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-modif-therapie',
  templateUrl: './modif-therapie.component.html',
  styleUrls: ['./modif-therapie.component.css']
})
export class ModifTherapieComponent implements OnInit {
  therapie:Therapie=new Therapie();
  id:any;

  imageTherapie:any;
  imgURL:any
  public imagPath:any;
  constructor(private router:Router,private therapieService:TherapieService,private login:UserServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.therapieService.getTherapieById(this.id).subscribe(data =>{
      this.therapie=data;
    })
  }

  onSubmit(){
    this.therapieService.updateTherapie(this.id,this.therapie).subscribe(data=>{
      if(this.login.isMedP()){
        this.router.navigate(['doctor']);
      }
      else if(this.login.isMedS()){
        this.router.navigate(['doctorsec']);
      }
      else if(this.login.isSecretaire()){
        this.router.navigate(['secretaire']);
      }
  
    })
  }



  onSelectFile(event:any){
    //si on a importé une image
    if(event.target.files.length>0){
      const file=event.target.files[0];
      this.imageTherapie=file;
      var imgType=event.target.files[0].type;
      var reader = new FileReader();
      this.imagPath=file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL=reader.result;
      }
    }

  }
}
