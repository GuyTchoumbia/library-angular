import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginData } from '../classes/loginData';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {

  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>,
              private authService: AuthentificationService,
    @Inject(MAT_DIALOG_DATA) public data: LoginData) {}  
  
  logIn(): void {
    this.authService.logIn();    
      this.dialogRef.close(this.data);        
  }

  cancel(): void {
    this.dialogRef.close();
 }
}
