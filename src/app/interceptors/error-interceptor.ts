import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private snackBar: MatSnackBar) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // handle errors
        return next.handle(req).pipe(
        catchError((error: HttpErrorResponse) => {
            if (error.error instanceof ErrorEvent) {
                // A client-side or network error occurred. Handle it accordingly.
                this.snackBar.open('An error occurred:', error.error.message);
              } else {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                this.snackBar.open(
                  `Backend returned code ${error.status}, ` +
                  `body was: ${error.error}`);
              }
            return throwError(error);
        })
    );
  }
}
