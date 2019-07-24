import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { DetailResolverService } from './detail/detail-resolver.service';
import { BasicSearchResolverService } from './list/basic-search-resolver.service';
import { AdvancedSearchResolverService } from './list/advanced-search-resolver.service';

const routes: Routes = [
  { path: 'advancedSearch',
    component: ListComponent,
    resolve: {
      results: AdvancedSearchResolverService
    }
  },
  {
    path: ':criteria/:field/:value',
    component: ListComponent,
    resolve: {
      results: BasicSearchResolverService
    }
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
    resolve: {
      document: DetailResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentRoutingModule { }
