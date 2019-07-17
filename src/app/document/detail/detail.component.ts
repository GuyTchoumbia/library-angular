import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../search.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Document } from '../../classes/document';
import { Location } from '@angular/common';
import { map, subscribeOn } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  document: Document;

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getDocument();
  }

  getDocument() {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        const id = +params.get('id');
        console.log(id);
        this.searchService.requestDetail(id).subscribe(
          response => this.document = response);
      }
    );
  }

  goBack() {
    this.location.back();
  }

}
