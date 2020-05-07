import { TestBed } from '@angular/core/testing';

import { ThingparametersService } from './thingparameters.service';

describe('ThingparametersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThingparametersService = TestBed.get(ThingparametersService);
    expect(service).toBeTruthy();
  });
});
