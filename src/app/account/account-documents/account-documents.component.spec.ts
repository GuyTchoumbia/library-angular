import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDocumentsComponent } from './account-documents.component';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { SearchService } from 'src/app/document/search.service';
import { MatDialogModule } from '@angular/material/dialog';
import { testUser, testUserCotes } from 'src/app/test/testData';
import { of } from 'rxjs';
import { UserCote } from 'src/app/classes/userCote';

describe('AccountDocumentsComponent', () => {
  let component: AccountDocumentsComponent;
  let fixture: ComponentFixture<AccountDocumentsComponent>;

  const mockAuthService = {
    getUser: jasmine.createSpy().and.returnValue({
      subscribe: jasmine.createSpy()
    })
  }
  const mockSearchService = {
    extend: jasmine.createSpy().and.returnValue({
      subscribe: jasmine.createSpy()
    })
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ MatDialogModule ],
      declarations: [ AccountDocumentsComponent ],
      providers: [
        { provide: AuthenticationService, useValue: mockAuthService},
        { provide: SearchService, useValue: mockSearchService}
      ]
    })
    fixture = TestBed.createComponent(AccountDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // test filterAndParseData()

  it('should filter out userCote objects whose borrowing date is null',() => {
    const data = component.filterAndParseDate(testUserCotes);
    // 3 obects in the collection, only 2 should pass the filter
    expect(data.length).toBe(2);
  })

  it('should add 15 days to the borrowing date as a return date',() => {
    const data = component.filterAndParseDate(testUserCotes);
    // date for the test data is set to 0, function adds 15 days in ms
    const expectedDateRetour = new Date(15 * 24 * 60 * 60 * 1000);
    expect(data[0].dateRetour).toEqual(expectedDateRetour);
  })
});
