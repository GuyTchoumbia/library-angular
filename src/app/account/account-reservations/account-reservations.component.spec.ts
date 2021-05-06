import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountReservationsComponent } from './account-reservations.component';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { MatDialogModule } from '@angular/material/dialog';
import { SearchService } from 'src/app/document/search.service';
import { UserCote } from 'src/app/classes/userCote';
import { of } from 'rxjs';

describe('AccountReservationsComponent', () => {
  let component: AccountReservationsComponent;
  let fixture: ComponentFixture<AccountReservationsComponent>;
  const mockAuthService = { // gotta actually mock the whole nesting of the service...
    getUser: jasmine.createSpy().and.returnValue({
      subscribe: jasmine.createSpy().and.returnValue(of([]))
    })
  }
  const mockSearchService = {
    cancelReserve: jasmine.createSpy().and.returnValue({
      subscribe: jasmine.createSpy()
    })
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ MatDialogModule ],
      declarations: [ AccountReservationsComponent],
      providers: [
        { provide: AuthenticationService, useValue: mockAuthService },
        { provide: SearchService, useValue: mockSearchService }
      ]
    })
    fixture = TestBed.createComponent(AccountReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const testUserCote: UserCote[] = [];
    expect(component).toBeTruthy();
  });
});
