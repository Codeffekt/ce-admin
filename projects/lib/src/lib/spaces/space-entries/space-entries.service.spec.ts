import { TestBed } from '@angular/core/testing';

import { SpaceEntriesService } from './space-entries.service';

describe('SpaceEntriesService', () => {
  let service: SpaceEntriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpaceEntriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
