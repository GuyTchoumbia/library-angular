import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit {

  // maps the value of the option to its request path
  categoriesMap = new Map()
    .set('Titre', 'document')
    .set('Auteur', 'auteur')
    .set('Editeur', 'editeur')
    .set('ISBN', 'isbn')
    .set('Cote', 'cote')
    .set('Tag', 'tag');
  categories = Array.from(this.categoriesMap.keys());
  criterias: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getCriterias() {
    this.criterias = '?';
  }

  search(): void {
    this.getCriterias();
    this.router.navigate(['results', 'search', this.criterias]);
  }

  reset() {
    this.criterias = '';
    window.location.reload();
  }

}
