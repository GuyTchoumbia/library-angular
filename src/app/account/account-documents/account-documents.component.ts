import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { UserCote } from '../../classes/userCote';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import { SearchService } from 'src/app/document/search.service';

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
    this.authService.getUser().subscribe(user => {
        this.userDocuments = user.userCotes.filter(element => element.dateEmprunt != null);
        this.userDocuments.forEach(element => {
           element.dateRetour = new Date(new Date(element.dateEmprunt).getTime() + 15 * 24 * 60 * 60 * 1000);
        });
    });
  }

  goBack() {
    this.location.back();
  }

  onExtend(userCote: UserCote) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '200px',
      data: userCote.cote.document.libelle
    });
    dialogRef.afterClosed().subscribe(accept => {
      if (accept) {
        this.searchService.extend(userCote.id).subscribe(updatedUserCote => {
          // replaces the object in the page data
          this.userDocuments.splice(this.userDocuments.indexOf(userCote), 1, updatedUserCote);
        });
      }
    });
  }

}
