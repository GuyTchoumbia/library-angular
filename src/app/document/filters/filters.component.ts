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
  types: any;
  bibliotheques: any;
  editeurs: any;
  filters = [];

  @Input()
  set results(results: Document[]){
    this.auteurs = this.getMap(results, 'auteur');
    this.types = this.getMap(results, 'type');
    this.bibliotheques = this.getMap(results, 'bibliotheque');
    this.editeurs = this.getMap(results, 'editeur');
  }

  @Output() filter = new EventEmitter<[string, string]>();

  constructor() { }

  ngOnInit() { }

  getMap(results: Document[], property: string): any {
    const map = new Map<string, number>();
    results
      .map(doc => doc[property])
      .forEach(element => {
        if (map.get(element)) {
          map.set(element, map.get(element) + 1);
        } else {
          map.set(element, 1);
        }
    });
    return Array.from(map);
  }

  addFilter(key: string, value: string) {
    this.filter.emit([key, value]);
  }
}
