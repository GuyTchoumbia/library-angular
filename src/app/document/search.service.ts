import { Injectable } from '@angular/core';
import { DOCUMENTS } from '../mockup lists/document-list';
import { Document } from '../classes/document';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  results: Document[] = DOCUMENTS;
  constructor() { }

  getResults(): Document[] {
    /*TODO*/
    return this.results;
  }

  getDetail(id: number): Document {
    return this.results.find((document) => document.id === id);
  }
}
