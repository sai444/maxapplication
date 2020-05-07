import { TestBed } from '@angular/core/testing';

import { AddThingtemplateService } from './add-thingtemplate.service';

describe('AddThingtemplateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddThingtemplateService = TestBed.get(AddThingtemplateService);
    expect(service).toBeTruthy();
  });
});
