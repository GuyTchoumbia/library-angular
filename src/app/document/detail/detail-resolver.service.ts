import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { SearchService } from '../search.service';
import { take, mergeMap } from 'rxjs/operators';
import { Document } from 'src/app/classes/document';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class DetailResolverService implements Resolve<Document> {

  constructor(private searchService: SearchService,
              private router: Router,
              private snackBar: MatSnackBar
  ) { }

  // resolver: this is where the request to the api is actually made, before the page is loaded
  // a snackbar is displayed in case of failure
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Document> | Observable<never> {
    const id = +route.paramMap.get('id');
    return this.searchService.requestDetail(id).pipe(
      take(1),
      mergeMap(document => {
        if (document) {
          return of(document);
        } else {
          this.router.navigate(['/results']);
          this.snackBar.open('Couldn\'t find the document, Sorry', null, { duration: 3000 });
          return EMPTY;
        }
      })
    );
  }
}
