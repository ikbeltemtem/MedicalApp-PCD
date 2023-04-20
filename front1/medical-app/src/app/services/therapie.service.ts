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

  public createTherapie(therapie:Therapie):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/createTherapie`,therapie);
  }
  public updateTherapie(id:number,therapie:Therapie): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/update/${id}`,therapie);
  }

  public deleteTherapie(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }

  public updateTherapieRate(id:number,therapie:Therapie): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/updateRate/${id}`,therapie);
  }



}

