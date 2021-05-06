import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BiblioComponent } from './biblio/biblio.component';
import { EmprunterComponent } from './emprunter/emprunter.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AcceuilComponent } from './acceuil.component';
import { AcceuilResolverService } from './acceuil-resolver.service';
import { BiblioResolverService } from './biblio/biblio-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: AcceuilComponent,
    resolve: {
      libraries: AcceuilResolverService
    },
    children: [
      { path: 'accueil/biblio/:id',
        component: BiblioComponent,
        resolve: {
          library: BiblioResolverService
        }
      },
      { path: 'accueil/emprunter',
        component: EmprunterComponent
      },
      { path: 'accueil/inscription',
        component: InscriptionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcceuilRoutingModule { }
