import { TestBed } from '@angular/core/testing';

import { EstoquesService } from './estoques.service';

describe('EstoquesService', () => {
  let service: EstoquesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstoquesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
