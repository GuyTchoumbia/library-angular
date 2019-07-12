import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginData } from '../classes/loginData';
import { AuthentificationService } from '../authentification.service';

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
              ) { }

  ngOnInit(): void {
    this.authService.getIsLoggedIn().subscribe(isLoggedIn => this.isSuccessfull = isLoggedIn);
  }

  logIn(): void {
    this.authService.logIn(this.username, this.password).subscribe(response => {
      if (response.body) {
        this.authService.setUser(response.body);
        this.authService.setIsLoggedIn(true);
        this.dialogRef.close();
      } else {
        console.log('wrong credentials');
      }
    });
  }

  cancel(): void {
    this.dialogRef.close();
 }
}
