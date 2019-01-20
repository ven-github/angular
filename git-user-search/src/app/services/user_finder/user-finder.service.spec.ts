import { TestBed } from '@angular/core/testing';

import { UserFinderService } from './user-finder.service';

describe('UserFinderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserFinderService = TestBed.get(UserFinderService);
    expect(service).toBeTruthy();
  });
});
