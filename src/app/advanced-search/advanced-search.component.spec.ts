import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdvancedSearchComponent } from './advanced-search.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SearchService } from '../document/search.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

describe('AdvancedSearchComponent', () => {
  let component: AdvancedSearchComponent;
  let fixture: ComponentFixture<AdvancedSearchComponent>;
  const mockSearchService = {
    getAllLibraries: jasmine.createSpy().and.returnValue({
      subscribe: jasmine.createSpy()
    }),
    getAllSupports: jasmine.createSpy().and.returnValue({
      subscribe: jasmine.createSpy()
    })
  }
  const mockRouter = jasmine.createSpyObj('router', ['navigate']);

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ MatSnackBarModule, ReactiveFormsModule ],
      declarations: [ AdvancedSearchComponent ],
      providers: [
        { provide: SearchService, useValue: mockSearchService },
        { provide: Router, useValue: mockRouter }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
