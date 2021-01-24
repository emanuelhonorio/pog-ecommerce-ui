import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  Carrinho,
  CarrinhoService,
} from 'src/app/core/services/carrinho.service';

import { format } from '../../../../shared/util/formatter';

@Component({
  selector: 'app-cart-summary-editable',
  templateUrl: './cart-summary-editable.component.html',
  styleUrls: ['./cart-summary-editable.component.scss'],
})
export class CartSummaryEditableComponent implements OnInit, OnDestroy {
  carrinho$: Subscription;

  carrinho: Carrinho = null;

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit(): void {
    this.carrinho$ = this.carrinhoService.carrinho$.subscribe((carrinho) => {
      this.carrinho = carrinho;
    });
  }

  ngOnDestroy() {
    if (this.carrinho$) this.carrinho$.unsubscribe();
  }

  formatarValor(valor: number) {
    return format(valor);
  }
}
