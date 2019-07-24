import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {map, startWith, debounceTime, switchMap, filter} from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SearchService } from '../document/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  libelle = new FormControl('');
  selectable = ['Tous', 'Libelle', 'Auteur', 'Editeur'];
  select = 'any';
  isLoggedIn: boolean;
  username: string;
  options: string[];

  constructor(public dialog: MatDialog,
              private authService: AuthentificationService,
              private searchService: SearchService,
              private router: Router,
              private snackBar: MatSnackBar
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.authService.getIsLoggedIn().subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.username = this.authService.getUser().value.civil.prenom;
      } else {
        this.username = undefined;
      }
      this.isLoggedIn = isLoggedIn;
    });
    this.libelle.valueChanges
      .pipe(
        debounceTime(300),
        filter(value => value.length > 2),
        switchMap(value => this.searchService.autocomplete(value))
      )
      .subscribe(response => this.options = response.map(value => value.libelle));
  }

  private _filter(value: string): string[] {
    return null;
  }

  logOut(): void {
    this.authService.logOut();
    this.router.navigate(['']);
    this.snackBar.open('Logged Out', '', { duration: 3000, horizontalPosition: 'center' });
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '250px',
    });
  }

  search() {
    if (this.libelle.value !== '') {
      this.router.navigate(['results', this.select, 'libelle', this.libelle.value]);
    }
  }

}
