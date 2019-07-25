import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS, HttpInterceptor, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor{

  constructor(private authenticationService: AuthenticationService) { }

  handleError(error: HttpErrorResponse){
    console.log("error occurred");
    return throwError(error);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const header = new HttpHeaders({
      'Anthroization': 'currentUser'
    });

    const clone = req.clone({
      headers: header
    });
  
    return next.handle(clone).pipe(
      catchError(this.handleError)
    )
  }
}
