import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  constructor(public dialog: MatDialog,
              private authService: AuthentificationService,
              private router: Router,
              private snackBar: MatSnackBar
              ) {
  }

  ngOnInit() {
    this.authService.getIsLoggedIn().subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.username = this.authService.getUser().value.civil.prenom;
      }
      else {
        this.username = undefined;
      }
      this.isLoggedIn = isLoggedIn;
    });
    this.filteredOptions = this.libelle.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
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
