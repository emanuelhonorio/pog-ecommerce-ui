import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CorI, TamanhoI } from '../models/api-models';

export interface ItemCarrinho {
  id?: number;
  produto?: any;
  tamanhoEscolhido?: TamanhoI;
  corEscolhida?: CorI;
  quantidade: number;
  subTotal: number;
}

export interface Carrinho {
  id?: number;
  items?: ItemCarrinho[];
  total?: number;
}

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  private readonly _carrinho = new BehaviorSubject<Carrinho>({
    items: [],
    total: 0,
  });

  readonly carrinho$ = this._carrinho.asObservable();

  private nextItemId: number = 1;

  constructor() {}

  get carrinho(): Carrinho {
    return this._carrinho.getValue();
  }

  set carrinho(val: Carrinho) {
    this._carrinho.next(val);
  }

  findIndexItemInCart(item: ItemCarrinho): number {
    return this.carrinho.items.findIndex((i) => {
      let sameProdutoId = i.produto.id === item.produto.id;
      let sameColor = i.corEscolhida.id === item.corEscolhida.id;
      let sameTamanho = i.tamanhoEscolhido.id === item.tamanhoEscolhido.id;

      return sameProdutoId && sameColor && sameTamanho;
    });
  }

  incAmmount(itemId: number) {
    const item = this.carrinho.items.find((i) => i.id === itemId);
    if (item) {
      item.quantidade++;
      item.subTotal = item.quantidade * item.produto.valorBase;
      // triggering the set
      this.carrinho = { ...this.carrinho };
    }
  }

  decAmmount(itemId: number) {
    const item = this.carrinho.items.find((i) => i.id === itemId);
    if (item) {
      if (item.quantidade == 1) {
        this.removeItem(itemId);
      } else {
        item.quantidade--;
      }
      item.subTotal = item.quantidade * item.produto.valorBase;
      // triggering the set
      this.carrinho = { ...this.carrinho };
    }
  }

  addItem(item: ItemCarrinho) {
    const newCarrinhoState = { ...this.carrinho };

    const itemFoundIdx = this.findIndexItemInCart(item);
    console.log('item', this.carrinho.items, item, itemFoundIdx);
    if (itemFoundIdx !== -1) {
      // if product is already in the cart
      let newItem = this.carrinho.items[itemFoundIdx];

      console.log('new Item', newItem);

      newItem.quantidade += item.quantidade;
      newItem.subTotal += item.subTotal;
    } else {
      // if product are not in the cart
      newCarrinhoState.items.push({
        ...item,
        id: this.nextItemId++,
      });
    }

    // triggering the set
    this.carrinho = newCarrinhoState;
  }

  removeItem(itemId: number) {
    this.carrinho.items = this.carrinho.items.filter((i) => i.id !== itemId);
    // triggering the set
    this.carrinho = { ...this.carrinho };
  }
}
