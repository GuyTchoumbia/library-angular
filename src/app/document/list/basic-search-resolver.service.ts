import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, EMPTY, of } from 'rxjs';
import { SearchService } from '../search.service';
import { take, mergeMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Document } from 'src/app/classes/document';

@Injectable({
  providedIn: 'root'
})
export class BasicSearchResolverService implements Resolve<Document[]> {

  constructor(private searchService: SearchService,
              private snackBar: MatSnackBar,
              private router: Router
    ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Document[]> | Observable<never> {
    const criteria = route.paramMap.get('criteria');
    const field = route.paramMap.get('field');
    const value = route.paramMap.get('value');
    return this.searchService.requestList(criteria, field, value).pipe(
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
