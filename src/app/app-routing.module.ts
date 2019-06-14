import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  { path: '', component: AcceuilComponent },
  { path: 'account/:username', component: AccountComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
