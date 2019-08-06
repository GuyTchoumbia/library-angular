import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountMainComponent } from './account-main/account-main.component';
import { AccountDocumentsComponent } from './account-documents/account-documents.component';
import { AccountReservationsComponent } from './account-reservations/account-reservations.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { AccountComponent } from './account.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: '',
            component: AccountMainComponent
          },
          {
            path: 'info',
            component: AccountInfoComponent
          },
          {
            path: 'documents',
            component: AccountDocumentsComponent
          },
          {
            path: 'reservations',
            component: AccountReservationsComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
