import { TestBed } from '@angular/core/testing';

import { BasicSearchResolverService } from './basic-search-resolver.service';

describe('BasicSearchResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicSearchResolverService = TestBed.get(BasicSearchResolverService);
    expect(service).toBeTruthy();
  });
});
