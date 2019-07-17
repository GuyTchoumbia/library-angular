import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginData } from '../classes/loginData';
import { AuthentificationService } from '../authentification.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  isSuccessfull: boolean;
  username: string;
  password: string;

  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>,
              private authService: AuthentificationService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.authService.getIsLoggedIn().subscribe(isLoggedIn => this.isSuccessfull = isLoggedIn);
  }

  logIn(): void {
    if (this.username === '' || this.password === '') {
      this.snackBar.open('Missing Fields', 'Error', { duration: 3000, } );
    }
    else {
      this.authService.logIn(this.username, this.password).subscribe(response => {
        if (response.body) {
          this.authService.setUser(response.body);
          this.authService.setIsLoggedIn(true);
          this.snackBar.open('Successfully Logged In', 'Valid', { duration: 3000, });
          this.dialogRef.close();
        } else {
          this.snackBar.open('Wrong Credentials', 'Error', { duration: 3000 });
        }
      });
    }
  }

  cancel(): void {
    this.dialogRef.close();
 }
}
