import { Injectable } from '@angular/core';
import { Document } from '../classes/document';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Library } from '../classes/library';
import { Support } from '../classes/support';
import { UserCote } from '../classes/userCote';
import { apiUrl } from '../constants';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  results: Observable<Document[]>;
  detail: Observable<Document>;
  baseUrl = apiUrl;

  constructor(private http: HttpClient) { }

  // search single document by id
  requestDetail(id: number): Observable<Document> {
    return this.http.get<Document>(this.baseUrl + 'document/id/' + id);
  }

  // search list by criteria
  requestList(criteria: string, field: string, value: string) {
    return this.http.get<Document[]>(this.baseUrl + 'document/' + criteria + '/' + field + '/' + value);
  }

  // search list of documents by title containing the string
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

  // get the info for a single library, used in page for info and opening hours
  getLibrary(id: number): Observable<Library> {
    return this.http.get<Library>(this.baseUrl + 'library/' + id);
  }

  // search for a list of support titles
  getAllSupports(): Observable<Support[]> {
    return this.http.get<Support[]>(this.baseUrl + 'support/all');
  }

  // reservation request
  reserve(coteId: number, userId: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'usercote/reserve/cote/' + coteId + '/user/' + userId);
  }

  // cancel reservation request
  cancelReserve(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'usercote/delete/' + id);
  }

  // extension request
  extend(id: number): Observable<UserCote> {
    return this.http.get<UserCote>(this.baseUrl + 'usercote/extend/' + id);
  }


  // accessors

  getResults(): Observable<Document[]> {
    return this.results;
  }

  getDetail(): Observable<Document> {
    return this.detail;
  }
}
