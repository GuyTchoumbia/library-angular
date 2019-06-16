import { Component, OnInit, Input } from '@angular/core';
import { Document } from '../../classes/document';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Input() results: Document[];
  auteurs: string[];
  types: number[];
  bibliotheques: string[];  
  constructor() { }

  ngOnInit() {
    this.auteurs = Array.from(new Set(this.results.map(doc => doc.auteur)));
    this.types = Array.from(new Set(this.results.map(doc => doc.type)));
    this.bibliotheques = Array.from(new Set(this.results.map(doc => doc.bibliotheque)));
  }

}
