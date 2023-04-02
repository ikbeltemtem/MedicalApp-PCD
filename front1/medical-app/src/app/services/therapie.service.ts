import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Therapie } from '../common/therapie';

@Injectable({
  providedIn: 'root'
})
export class TherapieService {

  private baseUrl= 'http://localhost:8080/api/therapie';
  constructor(private httpClient: HttpClient) { }


  public getListeTherapie(): Observable<Therapie[]>{
    return this.httpClient.get<Therapie[]>(`${this.baseUrl}/getAll`);
  }

  public getTherapieById(id:number):Observable<Therapie>{
    return this.httpClient.get<Therapie>(`${this.baseUrl}/get/${id}`);
  }




/*
  getListeTherapie():Observable<Therapie[]> {
            return this.httpClient.get<GetResponse>('http://localhost:8080/api/therapie/getAll').pipe(
              map((response: { _embedded: { therapies: any; }; })=>response._embedded.therapies)
            );
  }

  public getTherapieById(id:number):Observable<Therapie>{
    return this.httpClient.get<Therapie>(`${this.baseUrl}get/${id}`);
  }*/
}

/*interface GetResponse{
  _embedded:{
    therapies:Therapie[];
  }
}
*/