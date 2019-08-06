import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable()
export class ProgressInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // TODO
        // make the search bar subscribe to this method?
        // but first, the requests need to observe events (adding {observe: 'events'} to the config arguments)
        throw new Error("Method not implemented.");
    }
}
