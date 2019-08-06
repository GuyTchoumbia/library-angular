import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { UserCote } from '../../classes/userCote';

@Component({
  selector: 'app-account-reservations',
  templateUrl: './account-reservations.component.html',
  styleUrls: ['./account-reservations.component.css']
})
export class AccountReservationsComponent implements OnInit {
  userReservations: UserCote[];

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.authService.getUser().subscribe(user => this.userReservations = user.userCotes.filter(element => element.dateReservation != null));
  }

}
