import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Secretaire } from 'src/app/common/secretaire';
import { SecretaireService } from 'src/app/services/secretaire.service';

@Component({
  selector: 'secretaire',
  templateUrl: './secretaire.component.html',
  styleUrls: ['./secretaire.component.css']
})
export class SecretaireComponent implements OnInit {
   secretaires: Secretaire[]=[];
   public deleteSecretaire!:Secretaire|null;
   public editSecretaire! : Secretaire|null;

  constructor(private secretaireService: SecretaireService,private route :ActivatedRoute,
               private router:Router) { }

  ngOnInit(): void {
    this.getSecretaires();
  }
  


  public getSecretaires(): void {
    this.secretaireService.getSecretaireList().subscribe({
     next: (response: Secretaire[]) => {
        this.secretaires = response;
        console.log(this.secretaires);
      },
      error:(error: HttpErrorResponse) => {
        alert(error.message);
      }
  });
  }
  public onUpdateSecretaire(secretaire: Secretaire): void {
    this.editSecretaire = secretaire;
    this.secretaireService.updateSecretaire(this.editSecretaire.id,this.editSecretaire).subscribe({
      next : (response: Secretaire) => {
        console.log(response);
        this.getSecretaires();
      },
      error : (error: HttpErrorResponse) => {
        alert(error.message);
      }
  });
}
edit(id:string){
   
  this.router.navigate(['./modifierSecretaire', id], { relativeTo: this.route });

     
  }
  public add(){
    this.router.navigate(['../ajouterSecretaire'], { relativeTo: this.route });
  }

  public onAddSecretaire(addForm: NgForm): void {
    document.getElementById('add-secretaire-form')!.click();
    this.secretaireService.addSecretaire(addForm.value).subscribe({
      next : (response: Secretaire) => {
        console.log(response);
        this.getSecretaires();
        addForm.reset();
      },
      error : (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
  });
  }

  public onOpenModal(secretaire: Secretaire , mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addSecretaireModal');
    }
    if (mode === 'edit') {
      this.editSecretaire = secretaire;
      button.setAttribute('data-target', '#editSecretaireModal');
    }
    if (mode === 'delete') {
      this.deleteSecretaire = secretaire;
      button.setAttribute('data-target', '#deleteSecretaireModal');
    }
    container!.appendChild(button);
    button.click();
  }


  public onDeleteSecretaire(secretaireId: any): void {
    this.secretaireService.deleteSecretaire(secretaireId).subscribe({
    next:  (response: void) => {
        console.log(response);
        this.getSecretaires();
      },
      error:(error: HttpErrorResponse) => {
        alert(error.message);
      }
  });
  }
}
