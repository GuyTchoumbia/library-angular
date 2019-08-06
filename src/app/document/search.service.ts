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
    return this.http.get<Document>(this.baseUrl + 'document/id/' + id);
  }

  requestList(criteria: string, field: string, value: string) {
    return this.http.get<Document[]>(this.baseUrl + 'document/' + criteria + '/' + field + '/' + value);
  }

  autocomplete(libelle: string): Observable<Document[]> {
    return this.http.get<Document[]>(this.baseUrl + 'document/' + 'autocomplete/' + libelle);
  }

  advancedSearch(parameters: any) {
    return this.http.get<Document[]>(this.baseUrl + 'document/search', {params: parameters});
  }

  getAllLibraries(): Observable<Library[]> {
    return this.http.get<Library[]>(this.baseUrl + 'library/all');
  }

  getAllSupports(): Observable<Support[]> {
    return this.http.get<Support[]>(this.baseUrl + 'support/all');
  }

  getResults(): Observable<Document[]> {
    return this.results;
  }

  getDetail(): Observable<Document> {
    return this.detail;
  }
}
