import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../search.service';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Document } from '../../classes/document';
import { Location } from '@angular/common';
import { UserCote } from 'src/app/classes/userCote';
import { Cote } from 'src/app/classes/cote';
import { isNull, isNullOrUndefined } from 'util';
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
      if (isNullOrUndefined(userCote.dateRetour) && !isNullOrUndefined(userCote.dateEmprunt)) {
        isAvailable = false;
        this.dateRetour.setDate(new Date(userCote.dateEmprunt).getDate() + 15);
      }
    });
    return isAvailable;
  }

  // determine if said cote is reserved or not.
  isReserved(cote: Cote): boolean {
    let isReserved = false;
    cote.userCotes.forEach((userCote: UserCote) => {
      if (!isNullOrUndefined(userCote.dateReservation)) {
        isReserved = true;
      }
    });
    return isReserved;
  }

  reserve(cote: Cote): void {
    if (this.isLoggedIn) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '300px',
        data: this.document.libelle
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.searchService.reserve(cote.id, this.user.id).subscribe(document => {
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
