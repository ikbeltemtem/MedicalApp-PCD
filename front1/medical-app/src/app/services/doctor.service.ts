import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{map} from 'rxjs/operators';
import { Doctor } from '../common/doctor';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {
   private baseUrl = 'http://localhost:8080/api/doctor';
  constructor(private httpClient: HttpClient) { }

  getDoctorList():Observable<Doctor[]> {

    return this.httpClient.get<Doctor[]>(`${this.baseUrl}/getAll`);
  }

  public addDoctor(doctor: Doctor): Observable<Doctor> {
    return this.httpClient.post<Doctor>(`${this.baseUrl}/add`, doctor);
  }
  public updateDoctor(id_doctor:number,doctor : Doctor): Observable<Doctor> {
    return this.httpClient.put<Doctor>(`${this.baseUrl}/update/${id_doctor}`, doctor);
  }
  public deleteDoctor(doctorId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/delete/${doctorId}`);
  }
  public getMedecinById(id:number):Observable<Doctor>{
    return this.httpClient.get<Doctor>(`${this.baseUrl}get/${id}`);
  }
}
  
  
