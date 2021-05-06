import { TestBed } from '@angular/core/testing';

import { BiblioResolverService } from './biblio-resolver.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/document/search.service';

describe('BiblioResolverService', () => {
  let service: BiblioResolverService;
  const mockRouter = {
    paramMap: jasmine.createSpyObj('mockGetId', ['get'])
  };
  const mockSearchService = {
    getLibrary: jasmine.createSpyObj(['pipe'])
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [ MatSnackBarModule ], // don't know why you gotta import the whole module for testing
      providers: [
        BiblioResolverService,
        { provide: Router, useValue: mockRouter },
        { provide: SearchService, useValue: mockSearchService }
      ]
    });
    service = TestBed.inject(BiblioResolverService);
  });

  it('should be created', () => {
    expect(service).toBeDefined();
  });
});
