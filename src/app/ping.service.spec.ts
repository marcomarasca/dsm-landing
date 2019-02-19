import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PingService } from './ping.service';

describe('PingService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports: [ HttpClientTestingModule ]}));

  it('should be created', () => {
    const service: PingService = TestBed.get(PingService);
    expect(service).toBeTruthy();
  });
});
