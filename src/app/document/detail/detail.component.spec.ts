import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SearchService } from '../search.service';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { testDocument } from 'src/app/test/testData';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let isLoggedIn: boolean;
  const mockSearchService = {
    reserve: {
      subscribe: jasmine.createSpy()
    },
    requestList: jasmine.createSpy()
  }
  const mockRouter = {
    data: {
      subscribe: jasmine.createSpy()
    },
    navigate: jasmine.createSpy()
  }
  const mockAuthService = {
    getIsLoggedIn: jasmine.createSpy().and.returnValue({
      subscribe: jasmine.createSpy()
    }),
    getUser: jasmine.createSpy().and.returnValue({
      subscribe: jasmine.createSpy()
    })
  }
  const mockActivatedRoute = {
    data: {
      subscribe: jasmine.createSpy()
    }
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports : [ MatDialogModule ],
      declarations: [ DetailComponent ],
      providers: [
        { provide: SearchService, useValue: mockSearchService },
        { provide: AuthenticationService, useValue: mockAuthService },
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    component.document = testDocument;
    fixture.detectChanges();
  });

  it('should create', () => {
    isLoggedIn = true;
    expect(component).toBeTruthy();
  });
});
