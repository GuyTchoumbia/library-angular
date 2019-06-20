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
  bibliotheques: any;
  editeurs: any;
  filters = [];

  @Input()
  set results(results: Document[]){
    this.auteurs = this.getMap(results, 'auteurs');
    this.supports = this.getMap(results, 'support');
    this.bibliotheques = this.getMap(results, 'bibliotheques');
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
        if (map.get(element.libelle)) {
          map.set(element.libelle, map.get(element.libelle) + 1);
        } else {
          map.set(element.libelle, 1);
        }
    });
    return Array.from(map);
  }

  addFilter(key: string, value: string) {
    this.filter.emit([key, value]);
  }
}
