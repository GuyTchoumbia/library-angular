import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { of } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

describe('AuthGuard', () => {
  const mockAuthService = {
    getIsLoggedIn: jasmine.createSpy()
  }
  const mockRouter = {
    navigate: jasmine.createSpy()
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: AuthenticationService, useValue: mockAuthService },
        { provide: Router, useValue: mockRouter }
      ]
    });
  });

  it('should be used', inject([AuthGuard], (guard: AuthGuard) => {
    const testLoggedInTrue = mockAuthService.getIsLoggedIn.and.returnValue(of(true));
    expect(guard).toBeTruthy();
  }));
});
