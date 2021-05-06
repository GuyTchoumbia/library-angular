import { TestBed } from '@angular/core/testing';

import { DetailResolverService } from './detail-resolver.service';
import { Document } from 'src/app/classes/document';
import { SearchService } from '../search.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { testDocument } from 'src/app/test/testData';

describe('DetailResolverService', () => {
  let service: DetailResolverService;
  const document = testDocument;
  const mockSearchService = jasmine.createSpyObj('searchService', ['requestDetail']);
  const mockRouter = jasmine.createSpyObj('router', ['navigate']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ MatSnackBarModule ],
      providers: [
        DetailResolverService,
        { provide: SearchService, useValue: mockSearchService},
        { provide: Router, useValue: mockRouter}
      ]
    })
    service = TestBed.inject(DetailResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
