import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ProdutoFilter } from '../models/api-models';

@Injectable({
  providedIn: 'root',
})
export class ProdutoFilterStoreService {
  private readonly _produtoFilter = new BehaviorSubject<ProdutoFilter>({});

  readonly produtoFilter$ = this._produtoFilter.asObservable();

  constructor(private router: Router, private route: ActivatedRoute) {}

  get produtoFilter(): ProdutoFilter {
    return this._produtoFilter.getValue();
  }

  set produtoFilter(val: ProdutoFilter) {
    this._produtoFilter.next(val);

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        ...this.produtoFilter,
      },
      queryParamsHandling: 'merge',
    });
  }
}
