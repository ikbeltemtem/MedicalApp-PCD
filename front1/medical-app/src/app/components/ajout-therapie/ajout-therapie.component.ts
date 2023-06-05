import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Therapie } from 'src/app/common/therapie';
import { TherapieService } from 'src/app/services/therapie.service';

@Component({
  selector: 'app-ajout-therapie',
  templateUrl: './ajout-therapie.component.html',
  styleUrls: ['./ajout-therapie.component.css']
})
export class AjoutTherapieComponent implements OnInit {
  therapie: Therapie = new Therapie();
  // imageTherapie et imgURL  pour l'image de la thérapie
  imageTherapie: any;
  imgURL: any
  public imagPath: any;
  file!: File;
  message!: string;
 
  constructor(private therapieService: TherapieService, private route:ActivatedRoute,private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.file);
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.file, this.file.name);
    const nomTherapie = this.therapie.name;
    const description = this.therapie.description;
    //const video =this.therapie.video;
    uploadImageData.append('nomTherapie', nomTherapie);
    uploadImageData.append('description', description);
    //uploadImageData.append('video', video);
    


    this.httpClient.post('http://localhost:8080/api/therapie/upload', uploadImageData
      , { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
       this.router.navigate(['../therapies'], { relativeTo: this.route });

      }
      );
      

  }

  onSelectFile(event: any) {
    //si on a importé une image
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      this.imageTherapie = this.file;

      var imgType = event.target.files[0].type;
        
      var reader = new FileReader();
      this.imagPath = this.file;
      reader.readAsDataURL(this.file!);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      }
    }
  }


}
