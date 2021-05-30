import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  errorMessage: string;

    constructor(private snackBar: MatSnackBar) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // handle errors
        return next.handle(req).pipe(
        catchError((error: HttpErrorResponse) => {
            if (error.error instanceof ErrorEvent) {
                // client-side or network error
                this.snackBar.open('An error occurred:', error.error.message);
              } else {
                // unsuccessful response code.
                // shows the body in snackbar,
                switch (error.status) {
                  case 401: this.snackBar.open('Wrong Credentials', 'Error');
                  break;
                  case 403: this.snackBar.open('Forbidden', 'Error');
                  break;
                  default: this.snackBar.open(
                    'Error Code '+ error.status,
                    error.error ? error.error.messsage : null
                    );
                }
              }
            return throwError(error);
        })
    );
  }
}
