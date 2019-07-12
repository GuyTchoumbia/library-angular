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

  getResults(): Document[] {
    /*TODO*/
    return this.results;
  }

  requestDetail(id: number): Observable<HttpResponse<Document>> {
    return this.http.get<Document>(this.baseUrl + id, { observe: 'response'});
  }

  requestList(path: string): Observable<HttpResponse<Document[]>> {
    return this.http.get<Document[]>(this.baseUrl + path, {observe: 'response'});
  }
}
