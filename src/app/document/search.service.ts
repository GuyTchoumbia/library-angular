import { Injectable } from '@angular/core';
import { Document } from '../classes/document';
import { Observable } from 'rxjs';
import { HttpResponse, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  results: any;
  baseUrl = 'http://localhost:8080/library-api/document/';

  constructor(private http: HttpClient) { }

  requestDetail(id: number): Observable<Document> {
    return this.http.get<Document>(this.baseUrl + 'id/' + id);
  }

  requestList(criteria: string, field: string, value: string): Observable<HttpResponse<Document[]>> {
    return this.http.get<Document[]>(this.baseUrl + criteria + '/' + field + '/' + value, {observe: 'response'});
  }

  autocomplete(libelle: string): Observable<Document[]> {
    console.log('queried');
    return this.http.get<Document[]>(this.baseUrl + 'autocomplete/' + libelle);
  }

}
