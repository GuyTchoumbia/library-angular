import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthenticationService } from '../auth/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  isSuccessfull: boolean;
  username: number;
  password: string;
  rememberCredentials = false;

  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>,
              private authService: AuthenticationService,
              public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  // login function:
  // checks if username and password fieled are filled,
  // before sending the credentials to the API and closing the dialog window
  // opens notifications (snack bars) if fields are missing (any of them)
  // or if credentials are wrong.

  logIn(): void {
    // little trick here: an empty number field evaluates to false.
    if (!this.username || this.password === '') {
      this.snackBar.open('Missing Fields', 'Error', { duration: 3000, } );
    } else {
      // this.authService.logIn(this.username, this.password).subscribe(
      this.authService.authenticate(this.username, this.password).subscribe(
        isLoggedIn => {
          if (isLoggedIn) {
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
