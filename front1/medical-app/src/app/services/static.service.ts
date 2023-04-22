import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Static } from '../common/static';

@Injectable({
  providedIn: 'root'
})
export class StaticService {
  private baseUrl = 'http://localhost:8080/api/chart';
  constructor(private httpClient: HttpClient) { }

  getStat():Observable<Static[]> {

    return this.httpClient.get<Static[]>(`${this.baseUrl}/getAll`);
  }

  public updateStat(id:number,therapie:Static): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/update/${id}`,therapie);
  }

}
