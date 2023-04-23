import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/common/appointment';
import { Static } from 'src/app/common/static';
import { AppointmentService } from 'src/app/services/appointment.service';
import { StaticService } from 'src/app/services/static.service';

@Component({
  selector: 'app-modif-rdv',
  templateUrl: './modif-rdv.component.html',
  styleUrls: ['./modif-rdv.component.css']
})
export class ModifRdvComponent implements OnInit{
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.rendezvousservice.getAppointmentById(this.id).subscribe(data => {
      this.rendezvous = data;
    })
    this.getarrive();
  }
  constructor(private rendezvousservice: AppointmentService,  private staticService:StaticService,private route: ActivatedRoute, private router: Router) { }

  statistics:Static[]=[];
  id!: number;
  rendezvous: Appointment = new Appointment();
  _arrivelist!: arrive[];
  x!: string;
  getarrive() {
    this._arrivelist = [
      { id: 1, name: "arrivee", isselected: false },
      { id: 2, name: "en attente", isselected: false },
      { id: 3, name: "pas arrivee", isselected: false }
    ]
  }
  onSubmit() {

    this.rendezvousservice.updateAppointment(this.id, this.rendezvous).subscribe(data => {
      this.router.navigate(['secretaire']);
      
    })
    if(this.rendezvous.arrivee=="arrivee"){
      this.statistics[2].amount++;
    this.staticService.updateStat(1,this.statistics[2]).subscribe(data=>{
     })
    }else if(this.rendezvous.arrivee=="en attente"){
      this.statistics[3].amount++;
    this.staticService.updateStat(1,this.statistics[3]).subscribe(data=>{
     })
    }else{
      this.statistics[4].amount++;
      this.staticService.updateStat(1,this.statistics[4]).subscribe(data=>{
       })
    }
  }

  onchange() {

    this.x = this._arrivelist.filter(x => x.isselected == true).map(x => x.name).toString();
    this.rendezvous.arrivee = this.x;
    console.log(this.rendezvous.arrivee);
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
class arrive {
  id!: number;
  name!: string;
  isselected!: boolean;
}