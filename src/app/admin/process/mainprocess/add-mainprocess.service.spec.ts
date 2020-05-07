import { TestBed } from '@angular/core/testing';

import { AddMainprocessService } from './add-mainprocess.service';

describe('AddMainprocessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddMainprocessService = TestBed.get(AddMainprocessService);
    expect(service).toBeTruthy();
  });
});
