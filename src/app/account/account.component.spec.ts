import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountComponent } from './account.component';

import { AuthenticationService } from '../auth/authentication.service';
import { testUser } from 'src/app/test/testData';
import { of } from 'rxjs';
import { FormBuilder } from '@angular/forms';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;
  const mockAuthService = {
    getUser: jasmine.createSpyObj(['subscribe'])
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountComponent ],
      providers: [ FormBuilder, { provide: AuthenticationService, useValue: mockAuthService}]
    });
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    mockAuthService.getUser.subscribe.and.returnValue(of(testUser));
    expect(component).toBeDefined();
    expect(component.user).toBeUndefined();
  });
});
