import { Injectable } from '@angular/core';
import { Document } from '../classes/document';
import { Observable } from 'rxjs';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { Library } from '../classes/library';
import { Support } from '../classes/support';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  results: Observable<Document[]>;
  detail: Observable<Document>;
  baseUrl = 'http://localhost:8080/library-api/';

  constructor(private http: HttpClient) { }

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
    console.log(parameters);
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
