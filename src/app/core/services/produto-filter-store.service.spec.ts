import { TestBed } from '@angular/core/testing';

import { ProdutoFilterStoreService } from './produto-filter-store.service';

describe('ProdutoFilterStoreService', () => {
  let service: ProdutoFilterStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutoFilterStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
