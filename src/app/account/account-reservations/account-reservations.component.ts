import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { UserCote } from '../../classes/userCote';
import { Location } from '@angular/common';

@Component({
  selector: 'app-account-reservations',
  templateUrl: './account-reservations.component.html',
  styleUrls: ['./account-reservations.component.css']
})
export class AccountReservationsComponent implements OnInit {
  userReservations: UserCote[];

  constructor(private authService: AuthenticationService,
              private location: Location) { }

  ngOnInit() {
    this.authService.getUser().subscribe(user => this.userReservations = user.userCotes.filter(element => element.dateReservation != null));
  }

  goBack() {
    this.location.back();
  }

}
