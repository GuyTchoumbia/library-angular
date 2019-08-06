import { Injectable } from '@angular/core';
import { Document } from '../classes/document';
import { Observable, throwError } from 'rxjs';
import { HttpResponse, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Library } from '../classes/library';
import { Support } from '../classes/support';
import { take, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  results: Observable<Document[]>;
  detail: Observable<Document>;
  baseUrl = 'http://localhost:8080/library-api/';

  constructor(private http: HttpClient,
              private snackBar: MatSnackBar
    ) { }

  requestDetail(id: number): Observable<Document> {
    return this.http.get<Document>(this.baseUrl + 'document/id/' + id)
      .pipe(
        catchError(this.handleError)
      );
  }

  requestList(criteria: string, field: string, value: string) {
    return this.http.get<Document[]>(this.baseUrl + 'document/' + criteria + '/' + field + '/' + value)
      .pipe(
        catchError(this.handleError)
      );
  }

  autocomplete(libelle: string): Observable<Document[]> {
    return this.http.get<Document[]>(this.baseUrl + 'document/' + 'autocomplete/' + libelle)
      .pipe(
        catchError(this.handleError)
      );
  }

  advancedSearch(parameters: any) {
    return this.http.get<Document[]>(this.baseUrl + 'document/search', {params: parameters})
      .pipe(
        catchError(this.handleError)
      );
  }

  getAllLibraries(): Observable<Library[]> {
    return this.http.get<Library[]>(this.baseUrl + 'library/all')
      .pipe(
        catchError(this.handleError)
      );
  }

  getAllSupports(): Observable<Support[]> {
    return this.http.get<Support[]>(this.baseUrl + 'support/all')
      .pipe(
        catchError(this.handleError)
      );
  }

  getResults(): Observable<Document[]> {
    return this.results;
  }

  getDetail(): Observable<Document> {
    return this.detail;
  }

  private handleError(error: HttpErrorResponse) {
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
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

}
