import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  auteurs = this.searchService.getAvailableFilters('auteur');
  types = this.searchService.getAvailableFilters('type');
  bibliotheques = this.searchService.getAvailableFilters('bibliotheque');
  editeurs = this.searchService.getAvailableFilters('editeur');
  filters: any;

  constructor(private searchService: SearchService) { }

  ngOnInit() {     
    this.searchService.activeFilters$.subscribe(data => this.filters = Array.from(data));    
  }  

  addFilter(key: string, value: string) {
    this.searchService.addFilter(key, value);    
  }

  removeFilter(key: string) {
    this.searchService.removeFilter(key);
  }

  resetFilter() {
    this.searchService.resetFilter();
  }

}
