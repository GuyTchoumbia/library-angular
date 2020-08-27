import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { UserCote } from '../../classes/userCote';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import { SearchService } from 'src/app/document/search.service';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';

@Component({
  selector: 'app-account-reservations',
  templateUrl: './account-reservations.component.html',
  styleUrls: ['./account-reservations.component.css']
})
export class AccountReservationsComponent implements OnInit {
  userReservations: UserCote[];

  constructor(private authService: AuthenticationService,
              private location: Location,
              private dialog: MatDialog,
              private searchService: SearchService,
              ) { }

  ngOnInit() {
    this.authService.getUser().subscribe(user => this.userReservations = user.userCotes.filter(element => element.dateReservation != null));
  }

  goBack() {
    this.location.back();
  }

  onCancelReserve(userCote: UserCote) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '200px',
      data: userCote.cote.document.libelle
    });
    dialogRef.afterClosed().subscribe(accept => {
      if (accept) {
        this.searchService.cancelReserve(userCote.id).subscribe(() => {
          // removes the reservation from the displayed list
          this.userReservations.splice(this.userReservations.indexOf(userCote), 1);
        });
      }
    });
  }

}
