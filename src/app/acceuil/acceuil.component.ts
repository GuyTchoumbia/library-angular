import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Library } from '../classes/library';
import { SearchService } from '../document/search.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css'],
  animations: [
    trigger('toggleBiblio', [
      state('open', style({
        display: 'block'
      })),
      state('closed', style({
        display: 'none'
      })),
      transition('open <=> closed', [
        animate('0.2s')
      ]),
    ]),
    trigger('toggleModal', [
      state('open', style({
        display: 'block'
      })),
      state('closed', style({
        display: 'none'
      })),
      transition('open <=> closed', [
        animate('0.2s')
      ])
    ])
  ]
})
export class AcceuilComponent implements OnInit {
  isBiblioClicked = false;
  isModalClicked = false;
  libraries: Library[];

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: {libraries: Library[]}) => {
      this.libraries = data.libraries;
    });
   }

  toggleBiblio() {
    this.isBiblioClicked = !this.isBiblioClicked;
  }

  toggleModal() {
    this.isModalClicked = !this.isModalClicked;
  }

}
