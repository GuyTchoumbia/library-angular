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

  // search single document by id
  requestDetail(id: number): Observable<Document> {
    return this.http.get<Document>(this.baseUrl + 'document/id/' + id);
  }

  // search list by criteria
  requestList(criteria: string, field: string, value: string) {
    return this.http.get<Document[]>(this.baseUrl + 'document/' + criteria + '/' + field + '/' + value);
  }

  // search list of documents by title starting with
  // used by autocomplete fields
  autocomplete(libelle: string): Observable<Document[]> {
    return this.http.get<Document[]>(this.baseUrl + 'document/' + 'autocomplete/any/' + libelle);
  }

  // multicriteria search
  // parameters are gathered in a table
  advancedSearch(parameters: any) {
    return this.http.get<Document[]>(this.baseUrl + 'document/search', {params: parameters});
  }

  // search for a list of all library titles
  // used by advanced search page 
  getAllLibraries(): Observable<Library[]> {
    return this.http.get<Library[]>(this.baseUrl + 'library/all');
  }

  // search for a list of support titles
  getAllSupports(): Observable<Support[]> {
    return this.http.get<Support[]>(this.baseUrl + 'support/all');
  }

  // accessors

  getResults(): Observable<Document[]> {
    return this.results;
  }

  getDetail(): Observable<Document> {
    return this.detail;
  }
}
