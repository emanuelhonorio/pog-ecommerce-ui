import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { CarrinhoService } from '../../services/carrinho.service';
import { ProdutoFilterStoreService } from '../../services/produto-filter-store.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit, OnDestroy {
  @Output()
  public toggle = new EventEmitter();

  searchValue: string;

  carrinho$: Subscription;
  carrinhoSize: number;

  constructor(
    private produtoFilterStore: ProdutoFilterStoreService,
    private carrinhoService: CarrinhoService
  ) {}

  ngOnInit(): void {
    this.carrinho$ = this.carrinhoService.carrinho$.subscribe((carrinho) => {
      this.carrinhoSize = carrinho.items.length;
    });
  }

  ngOnDestroy() {
    if (this.carrinho$) this.carrinho$.unsubscribe();
  }

  search() {
    this.produtoFilterStore.produtoFilter = {
      ...this.produtoFilterStore.produtoFilter,
      nome: this.searchValue,
    };
  }
}
