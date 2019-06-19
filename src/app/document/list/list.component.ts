import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Document } from '../../classes/document';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  results: Document[] = this.searchService.getResults();
  filtersMap = new Map<string, string>();
  filters: [string, string][] = [];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  onAddFilter(filter: [string, string]) {
    this.filtersMap.set(filter[0], filter[1]);
    this.applyFilters();
    this.filters = Array.from(this.filtersMap);
  }

  removeFilter(filter: [string, string]) {
    this.filtersMap.delete(filter[0]);
    this.applyFilters();
    this.filters = Array.from(this.filtersMap);
  }

  applyFilters() {
    if (this.filtersMap.size) {
      this.filtersMap.forEach((value, key) => this.results = this.searchService.getResults().filter(doc => doc[key] === value));
    } else {
      this.results = this.searchService.getResults();
    }    
  }

  sort(value: any) { 
    if (value) {
      this.results.sort((a, b) => {
        const fieldA = a[value].toUpperCase(); // ignore upper and lowercase
        const fieldB = b[value].toUpperCase(); // ignore upper and lowercase
        if (fieldA < fieldB) {
          return -1;
        }
        if (fieldA > fieldB) {
          return 1;
        }  
        return 0;
      }); 
    }     
    else {
      this.results.sort((a, b) => a['id'] - b['id']);
    }  
    console.log(this.results); 
  }
}
