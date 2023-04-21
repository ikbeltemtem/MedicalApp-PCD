import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../common/comment';
import { Patient } from '../common/patient';
import { User } from '../common/user';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseUrl= 'http://localhost:8080/api/comments';

  constructor(private httpClient: HttpClient) { }

  public createComment(comm:Comment):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/create`,comm);
  }

  public updateComment(id:number,therapie:Comment): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/update/${id}`,therapie);
  }
  public getCommentByThId(id:string):Observable<Comment[]>{
    return this.httpClient.get<Comment[]>(`${this.baseUrl}/get/${id}`);
  }

  public deleteComment(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }


  public getComments(th:string): Observable<Comment[]>{
    return this.httpClient.get<Comment[]>(`${this.baseUrl}/get/${th}`);
  }

}
