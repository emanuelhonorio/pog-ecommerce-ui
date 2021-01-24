import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProdutoFilter } from 'src/app/core/models/api-models';
import { ProdutoFilterStoreService } from 'src/app/core/services/produto-filter-store.service';
import { ProdutosService } from 'src/app/core/services/produtos.service';

@Component({
  selector: 'app-produtos-page',
  templateUrl: './produtos-page.component.html',
  styleUrls: ['./produtos-page.component.scss'],
})
export class ProdutosPageComponent implements OnInit, OnDestroy {
  public produtos = [];
  public totalPages: number;
  public itensPerPage: number = 10;

  public produtoFilter: ProdutoFilter = {};
  public produtoFilter$: Subscription;

  constructor(
    private produtoService: ProdutosService,
    private route: ActivatedRoute,
    private produtoFilterStore: ProdutoFilterStoreService
  ) {}

  ngOnInit(): void {
    this.initFiltrosDaRota();
    this.produtoFilter$ = this.produtoFilterStore.produtoFilter$.subscribe(
      (filter) => {
        this.produtoFilter = filter;
        this.loadProdutos();
      }
    );
  }

  ngOnDestroy() {
    if (this.produtoFilter$) this.produtoFilter$.unsubscribe();
  }

  async loadProdutos() {
    const { content, totalPages } = await this.produtoService.list(
      this.produtoFilter
    );
    this.totalPages = totalPages;
    this.produtos = content;
    this.produtos = this.produtoService.wrapInfo(this.produtos);
  }

  initFiltrosDaRota() {
    const { nome, marca, valorDe, valorAte } = this.route.snapshot.queryParams;
    const categorias = this.route.snapshot.queryParamMap
      .getAll('categorias')
      .map((str) => +str);

    const filter: ProdutoFilter = {
      nome,
      marca,
      valorDe,
      valorAte,
      categorias,
    };

    this.produtoFilterStore.produtoFilter = filter;
  }

  onPageChange(event) {
    this.produtoFilterStore.produtoFilter = {
      ...this.produtoFilterStore.produtoFilter,
      page: event.pageIndex,
      size: event.pageSize,
    };
  }
}
