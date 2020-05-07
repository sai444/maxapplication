import { TestBed } from '@angular/core/testing';

import { SerorderService } from './serorder.service';

describe('SerorderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SerorderService = TestBed.get(SerorderService);
    expect(service).toBeTruthy();
  });
});
