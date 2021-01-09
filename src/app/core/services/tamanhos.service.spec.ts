import { TestBed } from '@angular/core/testing';

import { TamanhosService } from './tamanhos.service';

describe('TamanhosService', () => {
  let service: TamanhosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TamanhosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
