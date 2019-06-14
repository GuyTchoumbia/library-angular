import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';
import { Observable, of as observableOf } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  libelle = new FormControl('');
  isLoggedIn = observableOf(this.authService.isLoggedIn);
  username: string;
  password: string;

  constructor(public dialog: MatDialog,
              private authService: AuthentificationService,
              private router: Router,
              ) { }

  ngOnInit() {    
    this.authService.obsIsLoggedIn.subscribe((data) => {      
      console.log(data);
    });
  
  }
  
  logOut():void {
    this.authService.logOut();
    this.router.navigate(['']);
    
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '250px',
      data: {name: this.username, password: this.password}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.authService.logIn();
      this.username = result.username;
    });
  }
}
