import { async, ComponentFixture, TestBed, waitForAsync, tick } from '@angular/core/testing';

import { LoginDialogComponent } from './login-dialog.component';
import { AuthenticationService } from '../auth/authentication.service';
import { of } from 'rxjs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('LoginDialogComponent', () => {
  let component: LoginDialogComponent;
  let fixture: ComponentFixture<LoginDialogComponent>;
  const emptyUsername = null;
  const emptyPassword = '';
  const mockAuthService = {
    loginIn: jasmine.createSpyObj('LoginIn',['subscribe'])
  }

   beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ MatSnackBarModule ],
      declarations: [ LoginDialogComponent ],
      providers: [
        { provide: AuthenticationService, useValue: mockAuthService },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    fixture = TestBed.createComponent(LoginDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should show a snackbar if any of the fields are empty', () => {
    component.username = emptyUsername;
    fixture.detectChanges();
    expect(component.snackBar).toBeDefined();
    expect(component.dialogRef).toBeDefined();
  });
});
