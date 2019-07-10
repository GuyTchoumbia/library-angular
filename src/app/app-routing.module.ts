import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AccountComponent } from './account/account.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';

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
  },
  {
    path: 'advancedSearch',
    component: AdvancedSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
