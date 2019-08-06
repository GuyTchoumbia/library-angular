import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string = localStorage.getItem('token');
    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
        const authReq = req.clone();
        if (token) {
            authReq.headers.set('Authorization', `Bearer ${token}`);
        }

    // send cloned request with header to the next handler.
        return next.handle(authReq);
        // TODO
        // get the token from the response and store it
        //  .pipe(
        //     tap(event => {
        //         if (event instanceof HttpResponse) {
        //             localStorage.setItem('token', event.headers.get('Bearer'));
        //         }
        //     })
        // );
    }
}


