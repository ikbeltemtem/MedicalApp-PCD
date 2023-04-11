import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../common/user';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private baseUrl= 'http://localhost:8080/api/v1/auth';
  private baseUrl2= 'http://localhost:8080/api/user';
  

  constructor(private http:HttpClient,private userAuthService:UserAuthService) { }

  getAppointmentList():Observable<User[]> {

    return this.http.get<User[]>(`${this.baseUrl2}/getAll`);
  }

  adduser(user: User){
    
    return this.http.post<User>(`${this.baseUrl}/registerMed`, user)
  }

  login(email: string, password: string) : Observable<any> {
    return this.http.post(`${this.baseUrl}/authenticate`, { email, password });
      
  }

  public roleMatch(allowedRole:any):boolean{
    let isMatch=false;
    const userRole:any=this.userAuthService.getRole();
    if(userRole!=null && userRole){
      if(userRole==allowedRole){
        isMatch=true;
      }
    }return isMatch;
   }


  isPatient():Boolean{
    const userRole:any=this.userAuthService.getRole();
    if(userRole=="PATIENT")
    return true;
    else return false;
  }

  isMedP():Boolean{
    const userRole:any=this.userAuthService.getRole();
    if(userRole=="ADMIN")
    return true;
    else return false;
  }

  isMedS():Boolean{
    const userRole:any=this.userAuthService.getRole();
    if(userRole=="MEDS")
    return true;
    else return false;
  }

  isSecretaire():Boolean{
    const userRole:any=this.userAuthService.getRole();
    if(userRole=="SEC")
    return true;
    else return false;
  }
}
