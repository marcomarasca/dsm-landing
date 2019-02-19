import { TestBed } from '@angular/core/testing';

import { StreamService } from './stream.service';

describe('StreamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StreamService = TestBed.get(StreamService);
    expect(service).toBeTruthy();
  });
});
