import { TestBed } from '@angular/core/testing';

import { BasicSearchResolverService } from './basic-search-resolver.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';

describe('BasicSearchResolverService', () => {
  let service: BasicSearchResolverService;
  const mockSearchService = {
    requestList: jasmine.createSpy()
  }
  const mockRouter = {
    navigate: jasmine.createSpy()
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ MatSnackBarModule ],
      providers: [
        BasicSearchResolverService,
        { provide: SearchService, useValue: mockSearchService },
        { provide: Router, useValue: mockRouter }
       ]
    })
    service = TestBed.inject(BasicSearchResolverService);

  });

  it('should be created', () => {
    const testDocuments: Document[] = [];
    const getTestDocuments = mockSearchService.requestList.and.returnValue(of([]));
    expect(service).toBeTruthy();
  });
});
