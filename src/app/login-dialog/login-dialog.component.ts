import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthenticationService } from '../auth/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  logInForm: FormGroup;
  isSuccessfull: boolean;
  username: number;
  password: string;
  rememberCredentials = false;
  hide = true;

  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>,
              private authService: AuthenticationService,
              public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.logInForm = new FormGroup({
      username: new FormControl(this.username, [
        Validators.required,
        Validators.pattern('[0-9]{6}') // regex: exactly 6 digits
      ]),
      password: new FormControl(this.password, [
        Validators.required,
        // Validators.pattern('^([a-zA-z]{3,})([0-9]{4})$') // regex: at least 3 characters at the beginning, at least 4 digits at the end
      ])
    });
  }

  // submit method
  // sends the request and displays snackbar according to result
  onSubmit(): void {
    this.authService.authenticate(this.username, this.password).subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.snackBar.open('Successfully Logged In', 'Valid', { duration: 3000, });
        this.dialogRef.close();
      }
    });
  }

  // username validation error message
  // returns string message according to the error contained by the controls
  getUsernameErrorMessage() {
    if (this.logInForm.hasError('required', 'username')) {
      return 'Champ vide';
    }
    else if (this.logInForm.hasError('pattern', 'username')) {
      return 'Numéro invalide';
    }
    else return '';
  }

  // password validation error message
  // returns string message according to the error contained by the controls
  getPasswordErrorMessage() {
    if (this.logInForm.hasError('required', 'password')) {
      return 'Champ vide';
    }
    else if (this.logInForm.hasError('pattern', 'password')) {
      return 'Mot de passe invalide';
    }
    else return '';
  }


  cancel(): void {
    this.dialogRef.close();
 }
}
