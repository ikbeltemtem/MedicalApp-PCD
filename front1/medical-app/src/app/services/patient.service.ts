import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../common/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  
  private baseUrl = 'http://localhost:8080/api/patient';
  constructor(private httpClient: HttpClient) { }

  getSecretaireList():Observable<Patient[]> {

    return this.httpClient.get<Patient[]>(`${this.baseUrl}/getAll`);
  }

  public addPatient(secretaire: Patient): Observable<Patient> {
    return this.httpClient.post<Patient>(`${this.baseUrl}/add`, secretaire);
  }
  public updatePatient(ids:number,secretaire : Patient): Observable<Patient> {
    return this.httpClient.put<Patient>(`${this.baseUrl}/update/${ids}`, secretaire);
  }
  public deletePatient(secretaireId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/delete/${secretaireId}`);
  }
  public getPatientById(id:number):Observable<Patient>{
    return this.httpClient.get<Patient>(`${this.baseUrl}/get/${id}`);

  }
  public findPatientByEmail(email:string):Observable<Patient>{
    return this.httpClient.get<Patient>(`${this.baseUrl}/find/${email}`);
  }
}
