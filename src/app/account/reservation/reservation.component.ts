import { Component, OnInit, Input } from '@angular/core';
import { UserCote } from '../../classes/userCote';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  @Input() userCote: UserCote;  

  constructor() { }

  ngOnInit() {
  }

}
