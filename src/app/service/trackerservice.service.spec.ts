import { TestBed } from '@angular/core/testing';

import { TrackerserviceService } from './trackerservice.service';

describe('TrackerserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrackerserviceService = TestBed.get(TrackerserviceService);
    expect(service).toBeTruthy();
  });
});
