import { Component, OnInit, HostBinding } from '@angular/core';
import { SearchService } from '../search.service';
import { Document } from '../../classes/document';

@Component({
  selector: 'app-list',  
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  results: Document[];

  constructor(private searchService: SearchService) { }

  ngOnInit() { 
    this.searchService.results$.subscribe(data => this.results = data);
  } 
}
