import { TestBed } from '@angular/core/testing';

import { ThingtypeService } from './thingtype.service';

describe('ThingtypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThingtypeService = TestBed.get(ThingtypeService);
    expect(service).toBeTruthy();
  });
});
