import { TestBed } from '@angular/core/testing';

import { InfuraService } from './infura.service';

describe('InfuraService', () => {
  let service: InfuraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfuraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
