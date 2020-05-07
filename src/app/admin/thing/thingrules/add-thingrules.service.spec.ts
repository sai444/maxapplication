import { TestBed } from '@angular/core/testing';

import { AddThingrulesService } from './add-thingrules.service';

describe('AddThingrulesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddThingrulesService = TestBed.get(AddThingrulesService);
    expect(service).toBeTruthy();
  });
});
