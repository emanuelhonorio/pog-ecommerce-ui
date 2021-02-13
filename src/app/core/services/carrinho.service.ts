import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { Cor, Estoque, Tamanho } from '../models/api-models';

export interface ItemCarrinho {
  id?: number;
  produto?: any;
  corEscolhida?: Cor;
  tamanhoEscolhido?: Tamanho;
  estoque?: Estoque;
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

  readonly carrinho$: Observable<Carrinho> = this._carrinho.asObservable();

  constructor(private dialog: MatDialog, private toasr: ToastrService) {
    this.initCarrinhoFromLocalStorage();
  }

  get carrinho(): Carrinho {
    return this._carrinho.getValue();
  }

  set carrinho(val: Carrinho) {
    this._carrinho.next(val);
    localStorage.setItem('$$pog_carrinho$$', JSON.stringify(this.carrinho));
  }

  limparCarrinho() {
    this.carrinho = {
      items: [],
      total: 0,
    };
  }

  initCarrinhoFromLocalStorage() {
    const LSCarrinho = localStorage.getItem('$$pog_carrinho$$');

    if (!LSCarrinho) {
      this.limparCarrinho();
      return;
    }

    const carrinhoParsed = JSON.parse(LSCarrinho);

    if (!carrinhoParsed?.total || !carrinhoParsed?.items) {
      this.limparCarrinho();
      return;
    }

    carrinhoParsed.total = 0;

    for (let item of carrinhoParsed.items) {
      item.subTotal = this.calculaSubtotal(item);
      carrinhoParsed.total += item.subTotal;
    }

    console.log(this.carrinho);

    // triggering the set
    this.carrinho = carrinhoParsed;
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
    this.changeAmmount(itemId, 1);
  }

  decAmmount(itemId: number) {
    this.changeAmmount(itemId, -1);
  }

  changeAmmount(itemId: number, quantity: number) {
    const item = this.carrinho.items.find((i) => i.id === itemId);

    if (!item) return;

    if (item.quantidade + quantity <= 0) return this.removeItem(itemId);

    item.quantidade += quantity;
    item.subTotal = this.calculaSubtotal(item);
    this.carrinho.total += this.calculaValorUnidade(item) * quantity;
    // triggering the set
    this.carrinho = { ...this.carrinho };
  }

  addItem(item: ItemCarrinho) {
    const itemFoundIdx = this.findIndexItemInCart(item);

    // PRODUCT IS IN THE CART
    if (itemFoundIdx !== -1) {
      return this.changeAmmount(
        this.carrinho.items[itemFoundIdx].id,
        item.quantidade
      );
    }

    // PRODUCT IS NOT IN THE CART
    item.subTotal = this.calculaSubtotal(item);
    this.carrinho.total += item.subTotal;
    this.carrinho.items.push({
      ...item,
      id: new Date().getTime(),
    });

    // triggering the set
    this.carrinho = { ...this.carrinho };
  }

  removeItem(itemId: number) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      data: {
        title: 'Excluir item',
        message: 'Tem certeza que deseja remover este item do carrinho?',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.carrinho.items = this.carrinho.items.filter((el) => {
          if (el.id === itemId) {
            this.carrinho.total -= this.calculaSubtotal(el);
            return false;
          }
          return true;
        });
        // triggering the set
        this.carrinho = {
          ...this.carrinho,
        };
        this.toasr.success('Item removido com sucesso');
      }
    });
  }

  calculaSubtotal(item: ItemCarrinho): number {
    return item.quantidade * this.calculaValorUnidade(item);
  }

  calculaValorUnidade(item: ItemCarrinho) {
    return item.produto.valorBase + item.estoque.acrescimoValor;
  }

  calculaTotal(items: ItemCarrinho[]): number {
    items = items || [];

    return items.reduce((total, item) => {
      return total + this.calculaSubtotal(item);
    }, 0);
  }
}
