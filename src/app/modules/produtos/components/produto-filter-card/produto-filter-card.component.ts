import { Component, OnInit } from '@angular/core';
import { CategoriaI } from 'src/app/core/models/api-models';
import { CategoriasService } from 'src/app/core/services/categorias.service';
import { ProdutoFilterStoreService } from 'src/app/core/services/produto-filter-store.service';

@Component({
  selector: 'app-produto-filter-card',
  templateUrl: './produto-filter-card.component.html',
  styleUrls: ['./produto-filter-card.component.scss'],
})
export class ProdutoFilterCardComponent implements OnInit {
  categorias: CategoriaI[] = [];
  categoriasChecked = {}; // categoriaId :number, checked: boolean

  valorDe: number;
  valorAte: number;

  constructor(
    private categoriasService: CategoriasService,
    private produtoFilterStore: ProdutoFilterStoreService
  ) {}

  ngOnInit(): void {
    this.produtoFilterStore.produtoFilter$.subscribe((filter) => {
      this.initCategorias(filter.categorias);
      (this.valorDe = filter.valorDe), (this.valorAte = filter.valorAte);
    });
  }

  async loadCategorias() {
    this.categorias = await this.categoriasService.list();
  }

  async initCategorias(categoriasFilter: number[]) {
    await this.loadCategorias();
    if (categoriasFilter) {
      this.categoriasChecked = {};
      categoriasFilter.forEach(
        (categoriaId) => (this.categoriasChecked[categoriaId] = true)
      );
    }
  }

  handleCategoriaSelected(categoriaId: number) {
    // toggle checked
    if (this.categoriasChecked[categoriaId]) {
      delete this.categoriasChecked[categoriaId];
    } else {
      this.categoriasChecked[categoriaId] = true;
    }

    // emit changes to the store
    this.produtoFilterStore.produtoFilter = {
      ...this.produtoFilterStore.produtoFilter,
      categorias: Object.keys(this.categoriasChecked).map((idStr) => +idStr),
    };
  }

  handleAplicarFiltroValor() {
    // emit changes to the store
    this.produtoFilterStore.produtoFilter = {
      ...this.produtoFilterStore.produtoFilter,
      valorDe: this.valorDe,
      valorAte: this.valorAte,
    };
  }
}
