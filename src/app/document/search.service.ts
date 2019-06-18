import { Injectable } from '@angular/core';
import { DOCUMENTS } from '../mockup lists/document-list';
import { Document } from '../classes/document';
import { BehaviorSubject } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  results:Document[] = DOCUMENTS;
  results$ = new BehaviorSubject<Document[]>(DOCUMENTS);
  detailedResult: Document;
  availableFilters = new Map<string, string>();
  availableFilters$ = new BehaviorSubject<Map<string, string>>(this.availableFilters);
  activeFilters = new Map<string, string>();
  activeFilters$ = new BehaviorSubject<Map<string, string>>(this.activeFilters);
  constructor() { }

  publishResults() {    
    if (this.activeFilters.size === 0) {
      /*TODO*/
      // http request to rest
      this.results$.next(DOCUMENTS);
    } else {
      let filteredResults = this.results;
      this.activeFilters.forEach((value, key) => filteredResults = filteredResults.filter(doc => doc[key] === value));   
      this.results$.next(filteredResults);
    }
  }

  getDetail(id: number): Document {
    return this.results.find((document) => document.id === id);
  }   

  addFilter(key: string, value: string): void {
    if (!this.activeFilters.has(key)) {
      this.activeFilters.set(key, value);
      this.activeFilters$.next(this.activeFilters);    
      this.publishResults();
    }      
  }

  removeFilter(key: string): void {
    this.activeFilters.delete(key);
    this.activeFilters$.next(this.activeFilters);    
    this.publishResults();    
  }

  resetFilter(): void {
    this.activeFilters.clear();
    this.activeFilters$.next(this.activeFilters);
    this.publishResults();
  }

  getAvailableFilters(property: string) {
    const map = new Map<string, number>();
    this.results
      .map(doc => doc[property])
      .forEach(element => {
        if (map.get(element)) {
          map.set(element, map.get(element) + 1);
        }
        else {
          map.set(element, 1);
        }
    });
    return Array.from(map);
  }

}
