import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  CarrinhoService,
  Carrinho,
} from 'src/app/core/services/carrinho.service';

@Component({
  selector: 'app-carrinho-page',
  templateUrl: './carrinho-page.component.html',
  styleUrls: ['./carrinho-page.component.scss'],
})
export class CarrinhoPageComponent implements OnInit, OnDestroy {
  private carrinho$: Subscription;

  public carrinho: Carrinho;

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit(): void {
    this.carrinho$ = this.carrinhoService.carrinho$.subscribe((carrinho) => {
      this.carrinho = carrinho;
      console.log('changed', carrinho);
    });
  }

  ngOnDestroy(): void {
    if (this.carrinho$) this.carrinho$.unsubscribe();
  }

  removeItem(itemId: number): void {
    this.carrinhoService.removeItem(itemId);
  }

  incAmmount(itemId: number): void {
    this.carrinhoService.incAmmount(itemId);
  }

  decAmmount(itemId: number): void {
    this.carrinhoService.decAmmount(itemId);
  }
}
