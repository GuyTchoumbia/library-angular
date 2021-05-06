import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Library } from '../classes/library';
import { SearchService } from '../document/search.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of, EMPTY } from 'rxjs';
import { take, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AcceuilResolverService implements Resolve<Library[]> {

  constructor(
    private searchService: SearchService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Library[]> | Observable<never> {

    return this.searchService.getAllLibraries().pipe(
      take(1),
      mergeMap(libraries => {
        if (libraries) {
          return of(libraries);
        } else {
          this.router.navigate(['error']);
          this.snackBar.open('Error while connecting to the API', null, { duration: 3000 });
          return EMPTY;
        }
      })
    );
  }
}
