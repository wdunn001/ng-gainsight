import { TestBed } from '@angular/core/testing';

import { GainsightService } from './gainsight.service';

describe('GainsightService', () => {
  let service: GainsightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GainsightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
