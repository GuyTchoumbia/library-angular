import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentRoutingModule } from './document-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { ElementComponent } from './element/element.component';
import { FiltersComponent } from './filters/filters.component';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [ListComponent, DetailComponent, ElementComponent, FiltersComponent],
  imports: [
    CommonModule,
    DocumentRoutingModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatChipsModule,
    MatSelectModule,
    MatTabsModule,
    MatPaginatorModule
  ]
})
export class DocumentModule { }
