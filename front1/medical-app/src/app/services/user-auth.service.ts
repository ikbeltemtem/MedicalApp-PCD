import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRole(role: any){
    localStorage.setItem('role',JSON.stringify(role));
  }

  public getRole(): string {
    return JSON.parse(localStorage.getItem('role')!);
  }

  public setToken(token:string){
    localStorage.setItem("token",token);
  }
  public clear() {
    localStorage.clear();
  }
  public getToken(): string {
    return localStorage.getItem('token')!;
  }
    public isLoggedIn() {
      return this.getRole() && this.getToken();
    }
  
}
