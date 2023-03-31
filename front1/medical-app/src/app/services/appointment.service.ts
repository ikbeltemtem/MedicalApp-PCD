import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{map} from 'rxjs/operators';
import { Appointment } from '../common/appointment';
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
   private baseUrl = 'http://localhost:8080/api/Rdv';
  constructor(private httpClient: HttpClient) { }

  getAppointmentList():Observable<Appointment[]> {

    return this.httpClient.get<Appointment[]>(`${this.baseUrl}/getAll`);
  }

  public addAppointment(appointment: Appointment): Observable<Appointment> {
    return this.httpClient.post<Appointment>(`${this.baseUrl}/add`, appointment);
  }
  public updateAppointment(id:number,appointment : Appointment): Observable<Appointment> {
    return this.httpClient.put<Appointment>(`${this.baseUrl}/update/${id}`, appointment);
  }
  public deleteAppointment(appointmentId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/delete/${appointmentId}`);
  }
}
  
  
