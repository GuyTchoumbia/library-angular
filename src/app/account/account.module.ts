import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountMainComponent } from './account-main/account-main.component';
import { AccountDocumentsComponent } from './account-documents/account-documents.component';
import { AccountReservationsComponent } from './account-reservations/account-reservations.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { AccountComponent } from './account.component';

import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    AccountComponent,
    AccountMainComponent,
    AccountInfoComponent,
    AccountDocumentsComponent,
    AccountReservationsComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MatListModule,
    MatExpansionModule,
    MatDividerModule
  ]
})
export class AccountModule { }
