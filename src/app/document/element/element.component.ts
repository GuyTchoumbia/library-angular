import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../search.service';
import { Document } from 'src/app/classes/document';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  @Input() document: Document;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  // routing to the page detailing the document
  getDetail() {
    this.router.navigate(['results', 'detail', this.document.id]);
  }

}
