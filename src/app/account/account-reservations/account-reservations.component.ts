import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { UserCote } from '../../classes/userCote';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import { SearchService } from 'src/app/document/search.service';

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
    // gets the user cotes and filters out the ones witout a reservation date
    this.authService.getUser().subscribe(user => this.userReservations = user.userCotes.filter(element => element.dateReservation != null));
  }

  goBack() {
    // goes back one page
    this.location.back();
  }

  // event for reservation cancel:
  // opens up a confirmation pop up, passing the title of the document into the text of the pop up,
  // then launches the reservation cancel request, passing the id of the userCote object to be canceled
  // finally remores the reservation from the list
  onCancelReserve(userCote: UserCote) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { // opens dialog confirmation
      width: '200px',
      data: userCote.cote.document.libelle
    });
    dialogRef.afterClosed().subscribe(accept => {
      if (accept) {
        this.searchService.cancelReserve(userCote.id).subscribe(() => { // reservation cancel request
          // removes the reservation from the displayed list
          this.userReservations.splice(this.userReservations.indexOf(userCote), 1);
        });
      }
    });
  }

}
