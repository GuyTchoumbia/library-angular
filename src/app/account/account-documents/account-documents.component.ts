import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { UserCote } from '../../classes/userCote';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import { SearchService } from 'src/app/document/search.service';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-account-documents',
  templateUrl: './account-documents.component.html',
  styleUrls: ['./account-documents.component.css']
})
export class AccountDocumentsComponent implements OnInit {
  userDocuments: UserCote[];

  constructor(private authService: AuthenticationService,
              private location: Location,
              private dialog: MatDialog,
              private searchService: SearchService) { }

  ngOnInit() {

    // on initialization, gets the list of all documents borrowed by the user
    this.authService.getUser().subscribe(user => this.userDocuments = this.filterAndParseDate(user.userCotes));
  }

  goBack() {
    this.location.back();
  }

  // extends the duration of the borrowing
  // pops up a confirmation dialog, and on confirm, updates the chosen userCote Object,
  // then replaces the object in the page data (which updates the display)

  onExtend(userCote: UserCote) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '200px',
      data: userCote.cote.document.libelle
    });
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe(accept => {
        if (accept) {
          // tslint:disable-next-line: deprecation
          this.searchService.extend(userCote.id).subscribe(updatedUserCote => {
            // replaces the object in the page data
            this.userDocuments.splice(this.userDocuments.indexOf(userCote), 1, updatedUserCote);
          });
        }
    });
  }

  // filters out useCote objects whose borrowing date is null (reservations) , and converts the date to JS format.
  filterAndParseDate(userCotes: UserCote[]): UserCote[] {
    const filteredUserCotes = userCotes.filter(element => element.dateEmprunt != null);
    userCotes.forEach(element => {
       // calculates the return date, adding 15 days to the borrowing date (ugly, but simplest)
      element.dateRetour = new Date(new Date(element.dateEmprunt).getTime() + 15 * 24 * 60 * 60 * 1000);
   });
   return filteredUserCotes;
  }

}
