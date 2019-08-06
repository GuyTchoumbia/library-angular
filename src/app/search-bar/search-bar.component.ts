import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { AuthenticationService } from '../auth/authentication.service';
import { Router, NavigationStart, NavigationEnd, ResolveStart, ResolveEnd, Event } from '@angular/router';
import {debounceTime, switchMap, filter, map} from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SearchService } from '../document/search.service';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';

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
  progressBarValue: number;

  constructor(public dialog: MatDialog,
              private authService: AuthenticationService,
              private searchService: SearchService,
              private router: Router,
              private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    // checks if loggedIn
    this.authService.getIsLoggedIn().subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.authService.getUser().subscribe(user => {
          this.username = user.civil.nom + ' ' + user.civil.prenom;
        });
      } else {
        this.username = undefined;
      }
      this.isLoggedIn = isLoggedIn;
    });
    // autocomplete
    this.libelle.valueChanges
      .pipe(
        debounceTime(300),
        filter((value: string) => value.length > 2),
        switchMap(value => this.searchService.autocomplete(value)),
      )
      .subscribe(response => this.options = response.map(value => value.libelle));

    // progress bar
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.progressBarValue = 10;
      }
      if (event instanceof ResolveStart) {
        this.progressBarValue = 20;
      }
      if (event instanceof ResolveEnd) {
        this.progressBarValue = 50;
      }
      if (event instanceof NavigationEnd) {
        this.progressBarValue = 100;
      }
    });
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

  onAnimationEnd(event: Event) {
    this.progressBarValue = 0;
  }

}
