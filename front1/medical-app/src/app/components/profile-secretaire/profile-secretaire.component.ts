import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Secretaire } from 'src/app/common/secretaire';
import { SecretaireService } from 'src/app/services/secretaire.service';

@Component({
  selector: 'app-profile-secretaire',
  templateUrl: './profile-secretaire.component.html',
  styleUrls: ['./profile-secretaire.component.css']
})
export class ProfileSecretaireComponent implements OnInit {
  id!:number;
  public secretaire!:Secretaire;
  constructor(private secretaireService:SecretaireService , private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.secretaireService.getSecretaireById(this.id).subscribe(data =>{
      this.secretaire=data;
    })
  }

}
