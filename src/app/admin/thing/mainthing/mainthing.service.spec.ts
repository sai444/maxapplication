import { TestBed } from '@angular/core/testing';

import { MainthingService } from './mainthing.service';

describe('MainthingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainthingService = TestBed.get(MainthingService);
    expect(service).toBeTruthy();
  });
});
