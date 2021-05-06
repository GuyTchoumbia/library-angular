import { TestBed } from '@angular/core/testing';

import { AcceuilResolverService } from './acceuil-resolver.service';
import { HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { Library } from '../classes/library';
import { of } from 'rxjs';
import { SearchService } from '../document/search.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

describe('AcceuilResolverService', () => {
  let service: AcceuilResolverService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let testLibrarires: Library[];
  const mockSearchService = {
    getAllLibraries: jasmine.createSpy()
  }
  const mockRouter = {
    navigate: jasmine.createSpy()
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, MatSnackBarModule ],
      providers: [
        AcceuilResolverService,
        { provide: SearchService, useValue: mockSearchService },
        { provide: Router, useValue: mockRouter }
       ]
    });
    service = TestBed.inject(AcceuilResolverService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    testLibrarires = [];
    const getTestLibrarires = mockSearchService.getAllLibraries.and.returnValue(of(testLibrarires));
    expect(service).toBeTruthy();
  });
});
