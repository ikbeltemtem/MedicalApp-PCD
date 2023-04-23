import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/common/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';

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
  constructor(private rendezvousservice: AppointmentService, private route: ActivatedRoute, private router: Router) { }


  id!: number;
  rendezvous: Appointment = new Appointment();
  _arrivelist!: arrive[];
  x!: string;
  getarrive() {
    this._arrivelist = [
      { id: 1, name: "en cours", isselected: false },
      { id: 2, name: "en attente", isselected: false },
      { id: 3, name: "pas arrivee", isselected: false }
    ]
  }
  onSubmit() {

    this.rendezvousservice.updateAppointment(this.id, this.rendezvous).subscribe(data => {
      this.router.navigate(['secretaire']);

    })
  }

  onchange() {

    this.x = this._arrivelist.filter(x => x.isselected == true).map(x => x.name).toString();
    this.rendezvous.arrivee = this.x;
    console.log(this.rendezvous.arrivee);
  }

}
class arrive {
  id!: number;
  name!: string;
  isselected!: boolean;
}