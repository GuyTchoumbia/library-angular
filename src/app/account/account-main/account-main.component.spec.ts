import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AccountMainComponent } from './account-main.component';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { of } from 'rxjs';
import { testUser } from 'src/app/test/testData';
import { domain } from 'process';

describe('AccountMainComponent', () => {
  let component: AccountMainComponent;
  let fixture: ComponentFixture<AccountMainComponent>;
  const mockAuthService = {
    getUser: jasmine.createSpy().and.returnValue({
      subscribe: jasmine.createSpy()
    })
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountMainComponent ],
      providers: [
        { provide: AuthenticationService, useValue: mockAuthService }
      ]
    })
    fixture = TestBed.createComponent(AccountMainComponent);
    component = fixture.componentInstance;
    component.user = testUser;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the name of the user in the title', () => {
    const dom = fixture.nativeElement;
    expect(dom.querySelector('#title').textContent).toBe('Welcome, test prenom');
  });
});
