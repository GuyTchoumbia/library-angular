import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../search.service';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Document } from '../../classes/document';
import { Location } from '@angular/common';
import { UserCote } from 'src/app/classes/userCote';
import { Cote } from 'src/app/classes/cote';
import { isNull, isNullOrUndefined } from 'util';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  document: Document;
  dateRetour = new Date();

  constructor(
    private searchService: SearchService,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.searchService.getDetail().subscribe(response => this.document = response);
    this.route.data.subscribe((data: { document: Document }) => {
      this.document = data.document;
    });
  }

  goBack() {
    this.location.back();
  }

  getDocumentsOf(criteria: string, id: number) {
    this.searchService.requestList(criteria, 'id', id.toString());
    this.router.navigate(['/results']);
  }

  // determine if the cote is available; if not, also stores the due date
  isAvailable(cote: Cote): boolean {
    let isAvailable = true;
    cote.userCotes.forEach((userCote: UserCote) => {
      if (isNullOrUndefined(userCote.dateRetour) && !isNullOrUndefined(userCote.dateEmprunt)) {
        isAvailable = false;
        this.dateRetour.setDate(new Date(userCote.dateEmprunt).getDate() + 15);
      }
    });
    return isAvailable;
  }

}
