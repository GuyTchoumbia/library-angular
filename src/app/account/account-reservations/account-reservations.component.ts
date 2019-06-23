import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/authentification.service';
import { Document } from '../../classes/document';

@Component({
  selector: 'app-account-reservations',
  templateUrl: './account-reservations.component.html',
  styleUrls: ['./account-reservations.component.css']
})
export class AccountReservationsComponent implements OnInit {
  userReservations: Document[];

  constructor(private authService: AuthentificationService) {
    this.authService.getUser().subscribe(user => this.userReservations = user.reservations)
   }

  ngOnInit() {
  }

}
