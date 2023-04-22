import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notif } from '../common/notif';

@Injectable({
  providedIn: 'root'
})
export class NotifService {

  private baseUrl= 'http://localhost:8080/api/notif';
  constructor(private httpClient: HttpClient) { }

  public getListeNotif(): Observable<Notif[]>{
    return this.httpClient.get<Notif[]>(`${this.baseUrl}/getAll`);
  }

  public getNotifById(id:number):Observable<Notif>{
    return this.httpClient.get<Notif>(`${this.baseUrl}/get/${id}`);
  }

  public createNotif(therapie:Notif):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/create`,therapie);
  }

  public deleteNotif(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }

  public deleteAll() : Observable<void>{
    return this.httpClient.delete<void>(`${this.baseUrl}/deleteAll`);
  }

}
