import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';

const routes: Routes = [
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
  },
  {
    path: '',
    loadChildren: () => import('./acceuil/accueil.module').then(mod => mod.AccueilModule)
  },
  {
    path: 'acceuil',
    loadChildren: () => import('./acceuil/accueil.module').then(mod => mod.AccueilModule)
  },
];

const config: ExtraOptions = {
    enableTracing: true,
    onSameUrlNavigation: 'reload',
    relativeLinkResolution: 'legacy'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
