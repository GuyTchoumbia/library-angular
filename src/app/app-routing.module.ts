import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {
    path: '', component: AcceuilComponent
  },
  {
    path: 'results',
    loadChildren: () => import('./document/document.module').then(mod => mod.DocumentModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
