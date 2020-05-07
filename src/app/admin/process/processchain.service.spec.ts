import { TestBed } from '@angular/core/testing';

import { ProcesschainService } from './processchain.service';

describe('ProcesschainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProcesschainService = TestBed.get(ProcesschainService);
    expect(service).toBeTruthy();
  });
});
