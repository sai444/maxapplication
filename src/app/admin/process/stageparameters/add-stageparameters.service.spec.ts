import { TestBed } from '@angular/core/testing';

import { AddStageparametersService } from './add-stageparameters.service';

describe('AddStageparametersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddStageparametersService = TestBed.get(AddStageparametersService);
    expect(service).toBeTruthy();
  });
});
