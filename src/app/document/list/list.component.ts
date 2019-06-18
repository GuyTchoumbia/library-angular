import { Component, OnInit, HostBinding } from '@angular/core';
import { SearchService } from '../search.service';
import { Document } from '../../classes/document';

@Component({
  selector: 'app-list',  
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  results: Document[] = this.searchService.getResults();

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  onFilter(filter: [string, string]) {
    this.results = this.results.filter(doc => doc[filter[0]] === filter[1]);
  }

}
