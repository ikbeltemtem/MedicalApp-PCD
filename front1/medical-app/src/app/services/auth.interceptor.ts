import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAuthService } from './user-auth.service';
import { Router } from '@angular/router';

const TOKEN_HEADER_KEY = 'Authorization';       // for Spring Boot back-end 

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userAuthService: UserAuthService,
    private router:Router ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let authReq = request;
    const token = this.userAuthService.getToken();
    if (token != null) {
      authReq = request.clone({ headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
    }
    return next.handle(authReq);
  }
    //return next.handle(request);
  
}
