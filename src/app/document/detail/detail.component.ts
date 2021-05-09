import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../search.service';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Document } from '../../classes/document';
import { Location } from '@angular/common';
import { UserCote } from 'src/app/classes/userCote';
import { Cote } from 'src/app/classes/cote';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { User } from 'src/app/classes/user';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from 'src/app/login-dialog/login-dialog.component';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  document: Document;
  dateRetour = new Date();
  isLoggedIn: boolean;
  user: User;

  constructor(
    private authService: AuthenticationService,
    private searchService: SearchService,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data: { document: Document }) => {
      this.document = data.document;
    });

    // checks if logged in
    this.authService.getIsLoggedIn().subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
      if (isLoggedIn) {
        this.authService.getUser().subscribe(user => {
          this.user = user;
        });
      }
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
      if (userCote.dateRetour  === null || userCote.dateRetour === undefined
        && userCote.dateEmprunt !== null || userCote.dateEmprunt !== undefined ) {
        isAvailable = false;
        this.dateRetour.setDate(new Date(userCote.dateEmprunt).getDate() + 15);
      }
    });
    return isAvailable;
  }

  // reservation event
  // opens up a confirmation dialog
  // checks if logged in if accepted,
  // then sends request
  reserve(cote: Cote): void {
    if (this.isLoggedIn) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '300px',
        data: this.document.libelle
      });
      dialogRef.afterClosed().subscribe(confirm => {
        if (confirm) {
          this.searchService.reserve(cote).subscribe(document => {
            this.document = document;
          });
        }
      });
    }
    else {
      const dialogRef = this.dialog.open(LoginDialogComponent, {
        width: '300px',
      });
    }
  }
}
