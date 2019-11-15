import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Document } from '../../classes/document';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  auteurs: any;
  supports: any;
  editeurs: any;
  tags: any;
  filters = [];

  @Input()
  set results(results: Document[]){
    this.auteurs = this.getMap(results, 'auteurs');
    this.supports = this.getMap(results, 'support');
    this.editeurs = this.getMap(results, 'editeur');
    this.tags = this.getMap(results, 'tags');
  }

  @Output() filter = new EventEmitter<[string, string]>();

  constructor() { }

  ngOnInit() { }

  // the main function of the filter component
  // counts occurences of field titles in the list of results,
  // places them in a map where the key is the title (libelle field) and the value is the count number.
  // then converts it into an array (because the framework unfortunately only works with arrays)
  getMap(results: Document[], property: string): any {
    const map = new Map<string, number>();
    results
      .map(doc => doc[property])
      .flat()
      .forEach(element => {
        if (map.get(element.libelle)) {
          map.set(element.libelle, map.get(element.libelle) + 1);
        } else {
          map.set(element.libelle, 1);
        }
    });
    return Array.from(map);
  }

  // passes the filter paramater (a key/value pair) to the result component
  addFilter(key: string, value: string) {
    this.filter.emit([key, value]);
  }
}
