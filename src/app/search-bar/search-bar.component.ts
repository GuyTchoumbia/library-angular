import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  libelle = new FormControl('');
  isLoggedIn: boolean;
  username: string;
  password: string;
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  constructor(public dialog: MatDialog,
              private authService: AuthentificationService,
              private router: Router,
              ) { }

  ngOnInit() {
    this.authService.getIsLoggedIn().subscribe(data => this.isLoggedIn = data);    
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
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '250px',
      data: {name: this.username, password: this.password}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.username = result.username;
    });
  }
}
