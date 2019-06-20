import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Document } from '../../classes/document';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  results: Document[] = this.searchService.getResults();
  filtersMap = new Map<string, string>();
  filters: [string, string][] = [];

  paginatorLength = this.results.length;
  paginatorSize = 10;
  pageSizeOptions: number[] = [5, 10, 20];
  paginatedResults: Document[] = this.results.slice(0, this.paginatorSize);
  pageEvent: PageEvent;

  constructor(private searchService: SearchService) {}

  ngOnInit() {
  }

  onAddFilter(filter: [string, string]) {
    this.filtersMap.set(filter[0], filter[1]);
    console.log(this.filtersMap);
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
      this.filtersMap.forEach((value, key) => {
        this.results = this.results.filter(doc => {
          if (Array.isArray(doc[key])) {
            return doc[key].some(element => element.libelle === value);
          } else {
            return doc[key].libelle === value;
          }
        });
      });
    } else {
      this.results = this.searchService.getResults();
    }
  }

  sort(value: any) {
    if (value) {
      this.results.sort((a, b) => {
        const fieldA = a[value].toString().toUpperCase();
        const fieldB = b[value].toString().toUpperCase();
        if (fieldA < fieldB) {
          return -1;
        }
        if (fieldA > fieldB) {
          return 1;
        }
        return 0;
      });
    } else {
      this.results.sort((a, b) => a.id - b.id);
    }
    console.log(this.results);
  }

  onPageChanged(e: PageEvent) {
    let firstCut = e.pageIndex * e.pageSize;
    let secondCut = firstCut + e.pageSize;
    this.paginatedResults = this.results.slice(firstCut, secondCut);
  }
}
