import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Document } from '../../classes/document';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap, map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SlicePipe, Location } from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  results: Document[];
  filtersMap = new Map<string, string>();
  filters: [string, string][] = [];

  paginatorSize = 10;
  paginatedResults: Document[];
  paginatorLength: number;
  pageSizeOptions: number[] = [5, 10, 20];

  pageEvent: PageEvent;

  constructor(private location: Location,
              private route: ActivatedRoute,
              private router: Router
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data: { results: Document[] }) => {
      this.results = data.results;
      this.paginatedResults = this.results.slice(0, this.paginatorSize);
      this.paginatorLength = this.paginatedResults.length;
    });
  }

  // tslint:disable-next-line: no-shadowed-variable
  onAddFilter(filter: [string, string]) {
    this.filtersMap.set(filter[0], filter[1]);
    this.applyFilters();
    this.filters = Array.from(this.filtersMap);
  }

  // tslint:disable-next-line: no-shadowed-variable
  removeFilter(filter: [string, string]) {
    this.filtersMap.delete(filter[0]);
    this.applyFilters();
    this.filters = Array.from(this.filtersMap);
  }

  applyFilters() {
    if (this.filtersMap.size) {
      this.filtersMap.forEach((value, key) => {
        this.paginatedResults = this.results.filter(doc => {
          if (Array.isArray(doc[key])) {
            return doc[key].some(element => element.libelle === value);
          } else {
            return doc[key].libelle === value;
          }
        });
      });
      this.paginatorLength = this.paginatedResults.length;
    } else {
      this.paginatedResults = this.results;
      this.paginatorLength = this.paginatedResults.length;
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
    const firstCut = e.pageIndex * e.pageSize;
    const secondCut = firstCut + e.pageSize;
    this.paginatedResults = this.results.slice(firstCut, secondCut);
  }

  goBack() {
    this.location.back();
  }

  goBackToSearch() {
    this.router.navigate(['/advancedSearch']);
  }



}
