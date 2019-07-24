import { Injectable } from '@angular/core';
import { SearchService } from '../search.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { take, mergeMap } from 'rxjs/operators';
import { Document } from 'src/app/classes/document';

@Injectable({
  providedIn: 'root'
})
export class AdvancedSearchResolverService {

  constructor(private searchService: SearchService,
              private snackBar: MatSnackBar,
              private router: Router
) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Document[]> | Observable<never> {
    return this.searchService.advancedSearch(route.params).pipe(
      take(1),
      mergeMap(documents => {
        if (documents) {
          return of(documents);
        } else {
          this.router.navigate(['']);
          this.snackBar.open('Couldn\'t complete the search, Sorry', null, { duration: 3000 });
          return EMPTY;
        }
      })
    );
  }
}
