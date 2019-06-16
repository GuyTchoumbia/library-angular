import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentRoutingModule } from './document-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { ElementComponent } from './element/element.component';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [ListComponent, DetailComponent, ElementComponent],
  imports: [
    CommonModule,
    DocumentRoutingModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
  ]
})
export class DocumentModule { }