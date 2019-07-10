import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit {  
  
  // maps the value of the option to its request path
  categoriesMap = new Map()
    .set('Titre', '/libelle')
    .set('Auteur', 'auteurs/libelle')
    .set('Editeur', 'editeur/libelle')
    .set('ISBN', '/isbn')
    .set('Cote', '/cotes/libelle')
    .set('Support', '/support/libelle')

  categories = Array.from(this.categoriesMap.keys());
  
  constructor() { }

  ngOnInit() {
  }

}
