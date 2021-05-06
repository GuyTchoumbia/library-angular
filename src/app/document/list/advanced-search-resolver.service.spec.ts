import { TestBed } from '@angular/core/testing';

import { AdvancedSearchResolverService } from './advanced-search-resolver.service';
import { MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { SearchService } from '../search.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('AdvancedSearchResolverService', () => {
let service: AdvancedSearchResolverService;
const mockRouter = jasmine.createSpyObj(['navigate']);
const documents: Document[] = [];
const mockSearchService = {
  advancedSearch: jasmine.createSpy().and.returnValue(of(documents))
}

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ MatSnackBarModule ],
      providers: [
        AdvancedSearchResolverService,
        { provide: Router, useValue: mockRouter },
       { provide: SearchService, useValue: mockSearchService }
      ]
    });
  service = TestBed.inject(AdvancedSearchResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
