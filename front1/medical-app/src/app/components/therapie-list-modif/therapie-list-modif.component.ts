import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Therapie } from 'src/app/common/therapie';
import { TherapieService } from 'src/app/services/therapie.service';

@Component({
  selector: 'app-therapie-list-modif',
  templateUrl: './therapie-list-modif.component.html',
  styleUrls: ['./therapie-list-modif.component.css']
})
export class TherapieListModifComponent implements OnInit {
therapies!:Therapie[];
nom:any;
  constructor(private therapieService :TherapieService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.getTherapies();
  }
  public getTherapies():void{
    this.therapieService.getListeTherapie().subscribe(data=>{
      this.therapies=data;
    });
  }

  updateTherapie(id:any){

    this.router.navigate(['/updateTherapie',id],{relativeTo:this.route});
  }



  deleteTherapie(id:any){
    let nomTherapie:string
    this.therapieService.getTherapieById(id).subscribe(data=>{
      nomTherapie=data.name;
      if(window.confirm("Vous ètes sur de retirer "+nomTherapie)){
        this.therapieService.deleteTherapie(id).subscribe(data=>{
          this.getTherapies();
        })
      }
    })

  }

  search(){
    if(this.nom=="")
    {
      this.ngOnInit();
    }
    else{
      this.therapies = this.therapies.filter(res=>{
        return res.name.toLocaleLowerCase().match(this.nom.toLocaleLowerCase());
      })
    }
  }
  
}
