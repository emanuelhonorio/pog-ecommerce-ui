import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { element } from 'protractor';
import { Subscription } from 'rxjs';
import {
  CarrinhoService,
  Carrinho,
  ItemCarrinho,
} from 'src/app/core/services/carrinho.service';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

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

  getValorUnidadeFormatado(item: ItemCarrinho) {
    const valorUnidade = this.carrinhoService.calculaValorUnidade(item);
    return this.formatValor(valorUnidade);
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

  formatValor(valor: number) {
    return valor.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
}
