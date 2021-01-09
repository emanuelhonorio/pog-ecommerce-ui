import { TestBed } from '@angular/core/testing';

import { CoresService } from './cores.service';

describe('CoresService', () => {
  let service: CoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
