import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../search.service';
import { ActivatedRoute } from '@angular/router';
import { Document } from '../../classes/document';
import { Location } from '@angular/common';


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

  getDocument(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.searchService.requestDetail(id).subscribe(response => {
      if (response.body) {
        this.document = response.body;
      }
    });
  }

  goBack(): void {
    this.location.back();
  }

}
