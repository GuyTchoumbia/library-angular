import { Injectable } from '@angular/core';
import { SearchService } from 'src/app/document/search.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Library } from 'src/app/classes/library';
import { Observable, of, EMPTY } from 'rxjs';
import { take, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BiblioResolverService implements Resolve<Library> {

  constructor(
    private searchService: SearchService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  // resolver to get library info before the page is loaded,
  // uses the id passed from the url,
  // returns a library object if present,
  // redirects to main page and displays a notification if error

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Library | Observable<Library> | Observable<never> {
    const id = +route.paramMap.get('id');
    return this.searchService.getLibrary(id).pipe(
      take(1),
      mergeMap(library => {
        if (library) {
          return of(library);
        }
        else {
          this.router.navigate(['']);
          this.snackBar.open('Erreur de connexion', null, { duration: 3000 });
          return EMPTY;
        }
      })
    );
  }
}
