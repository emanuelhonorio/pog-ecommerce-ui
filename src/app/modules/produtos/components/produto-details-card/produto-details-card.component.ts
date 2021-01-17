import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from 'src/app/core/services/carrinho.service';

@Component({
  selector: 'app-produto-details-card',
  templateUrl: './produto-details-card.component.html',
  styleUrls: ['./produto-details-card.component.scss'],
})
export class ProdutoDetailsCardComponent implements OnInit {
  @Input()
  produto: any = {};

  quantidade: number = 1;

  tamanhoEscolhido: any;
  corEscolhida: any;

  selectedFotoIdx: number = 0;

  constructor(
    private carrinhoService: CarrinhoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  comprarAgora() {
    this.addItemAoCarrinho();
    this.router.navigateByUrl('/carrinho');
  }

  addItemAoCarrinho() {
    console.log('add ao carrinho', this.produto);
    this.carrinhoService.addItem({
      produto: this.produto,
      subTotal: this.produto.valorBase * this.quantidade,
      corEscolhida: this.produto.corUnica || this.corEscolhida,
      tamanhoEscolhido: this.produto.tamanhoUnico || this.tamanhoEscolhido,
      quantidade: this.quantidade,
    });
  }
}
