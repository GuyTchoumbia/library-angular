import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

import { AcceuilRoutingModule} from './acceuil-routing.module';

import { AcceuilComponent } from './acceuil.component';
import { BiblioComponent } from './biblio/biblio.component';
import { EmprunterComponent } from './emprunter/emprunter.component';
import { InscriptionComponent } from './inscription/inscription.component';

import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AcceuilComponent,
    BiblioComponent,
    EmprunterComponent,
    InscriptionComponent
  ],
  imports: [
    CommonModule,
    AcceuilRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class AccueilModule { }
