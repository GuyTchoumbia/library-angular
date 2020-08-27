import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserCote } from '../../classes/userCote';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SearchService } from 'src/app/document/search.service';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  @Input() userCote: UserCote;
  @Output() cancelReserveEvent = new EventEmitter<UserCote>();

  constructor(
    private searchService: SearchService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
  }

  cancelReserve(userCote: UserCote) {
    this.cancelReserveEvent.emit(userCote);
  }

}
