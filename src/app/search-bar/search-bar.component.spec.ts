import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { of } from 'rxjs';
import { testUser } from '../test/testData';
import { AuthenticationService } from '../auth/authentication.service';
import { SearchService } from '../document/search.service';
import { Router } from '@angular/router';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  let isLoggedIn: boolean;
  const user = testUser;
  const mockSearchService = jasmine.createSpyObj('searchService', ['autoComplete']);
  const mockRouter = {
    events: jasmine.createSpyObj('events', ['subscribe'])
  }
  const mockAuthService = {
    getUser: jasmine.createSpy().and.returnValue({
      subscribe: jasmine.createSpy()
    }),
    getIsLoggedIn: jasmine.createSpy('getIsLoggedIn').and.returnValue({
      subscribe: jasmine.createSpy('subscribe')
    })
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ MatSnackBarModule, MatDialogModule, MatAutocompleteModule ],
      declarations: [ SearchBarComponent ],
      providers: [
        { provide: AuthenticationService, useValue: mockAuthService },
        { provide: SearchService, useValue: mockSearchService },
        { provide: Router, useValue: mockRouter }
      ]
    })
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    isLoggedIn = true;
    expect(component).toBeTruthy();
  });
});
