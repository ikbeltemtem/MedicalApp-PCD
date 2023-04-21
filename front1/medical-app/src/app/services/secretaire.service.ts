import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{map} from 'rxjs/operators';
import { Appointment } from '../common/appointment';
import { Secretaire } from '../common/secretaire';
@Injectable({
  providedIn: 'root'
})
export class SecretaireService {
   private baseUrl = 'http://localhost:8080/api/secretaire';
  constructor(private httpClient: HttpClient) { }

  getSecretaireList():Observable<Secretaire[]> {

    return this.httpClient.get<Secretaire[]>(`${this.baseUrl}/getAll`);
  }

  public addSecretaire(secretaire: Secretaire): Observable<Secretaire> {
    return this.httpClient.post<Secretaire>(`${this.baseUrl}/add`, secretaire);
  }
  public updateSecretaire(ids:number,secretaire : Secretaire): Observable<Secretaire> {
    return this.httpClient.put<Secretaire>(`${this.baseUrl}/update/${ids}`, secretaire);
  }
  public deleteSecretaire(secretaireId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/delete/${secretaireId}`);
  }
  public getSecretaireById(id:number):Observable<Secretaire>{
    return this.httpClient.get<Secretaire>(`${this.baseUrl}/get/${id}`);

  }
  public findSecByEmail(email:string):Observable<Secretaire>{
    return this.httpClient.get<Secretaire>(`${this.baseUrl}/find/${email}`);
  }

  public getNotif(app:Appointment):Appointment{
    return app;
  }

  public addAppointment(appointment: Appointment): Observable<Appointment> {
    return this.httpClient.post<Appointment>(`${this.baseUrl}/add`, appointment);
  }
}
  
  
