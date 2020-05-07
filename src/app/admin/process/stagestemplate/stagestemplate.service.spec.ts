import { TestBed } from '@angular/core/testing';

import { StagestemplateService } from './stagestemplate.service';

describe('StagestemplateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StagestemplateService = TestBed.get(StagestemplateService);
    expect(service).toBeTruthy();
  });
});
