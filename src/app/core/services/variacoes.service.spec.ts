import { TestBed } from '@angular/core/testing';

import { VariacoesService } from './variacoes.service';

describe('VariacoesService', () => {
  let service: VariacoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VariacoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
