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

  getTherapie(theId: number): Observable<Therapie> {
       
    // buildURL based on therapie id
    const therapietUrl=`${this.baseUrl}/${theId}`;

    return this.httpClient.get<Therapie>(therapietUrl);
  }

  /*public getListeTherapie(): Observable<Therapie[]>{
    return this.httpClient.get<Therapie[]>(`${this.baseUrl}getAll`);
  }*/

  getListeTherapie():Observable<Therapie[]> {
            return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
              map((response: { _embedded: { therapies: any; }; })=>response._embedded.therapies)
            );
  }

  public getTherapieById(id:number):Observable<Therapie>{
    return this.httpClient.get<Therapie>(`${this.baseUrl}get/${id}`);
  }
}

interface GetResponse{
  _embedded:{
    therapies:Therapie[];
  }
}
