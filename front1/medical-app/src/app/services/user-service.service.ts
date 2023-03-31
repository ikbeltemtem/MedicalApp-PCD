import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../common/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private baseUrl= 'http://localhost:8080/api/v1/auth';
  private baseUrl2= 'http://localhost:8080/api/user';

  constructor(private http:HttpClient) { }

  getAppointmentList():Observable<User[]> {

    return this.http.get<User[]>(`${this.baseUrl2}/getAll`);
  }

  adduser(user: User){
    
    return this.http.post<User>(`${this.baseUrl}/register`, user)
  }

  login(email: string, password: string) : Observable<any> {
    return this.http.post(`${this.baseUrl}/authenticate`, { email, password });
      
  }
}
