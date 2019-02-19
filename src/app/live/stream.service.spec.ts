import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { StreamService } from './stream.service';

describe('StreamService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports: [ HttpClientTestingModule ]}));

  it('should be created', () => {
    const service: StreamService = TestBed.get(StreamService);
    expect(service).toBeTruthy();
  });
});
