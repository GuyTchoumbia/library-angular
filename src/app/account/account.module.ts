import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountMainComponent } from './account-main/account-main.component';
import { AccountDocumentsComponent } from './account-documents/account-documents.component';
import { AccountReservationsComponent } from './account-reservations/account-reservations.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { AccountComponent } from './account.component';
import { EmpruntComponent } from './emprunt/emprunt.component';
import { ReservationComponent } from './reservation/reservation.component';

import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AccountComponent,
    AccountMainComponent,
    AccountInfoComponent,
    AccountDocumentsComponent,
    AccountReservationsComponent,
    EmpruntComponent,
    ReservationComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MatListModule,
    MatExpansionModule,
    MatDividerModule,
    MatButtonModule
  ]
})
export class AccountModule { }
