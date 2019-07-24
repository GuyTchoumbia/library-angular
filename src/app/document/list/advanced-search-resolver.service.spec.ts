import { TestBed } from '@angular/core/testing';

import { AdvancedSearchResolverService } from './advanced-search-resolver.service';

describe('AdvancedSearchResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdvancedSearchResolverService = TestBed.get(AdvancedSearchResolverService);
    expect(service).toBeTruthy();
  });
});
