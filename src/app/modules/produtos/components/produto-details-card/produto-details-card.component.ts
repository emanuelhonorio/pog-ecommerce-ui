import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Estoque } from 'src/app/core/models/api-models';
import { CarrinhoService } from 'src/app/core/services/carrinho.service';

import { format } from '../../../../shared/util/formatter';

@Component({
  selector: 'app-produto-details-card',
  templateUrl: './produto-details-card.component.html',
  styleUrls: ['./produto-details-card.component.scss'],
})
export class ProdutoDetailsCardComponent implements OnInit {
  @Input()
  get produto() {
    return this._produto;
  }

  set produto(p) {
    this._produto = p;

    if (p) {
      if (!p.corUnica) {
        this.formG.get('corEscolhida').setValidators(Validators.required);
      }

      if (!p.tamanhoUnico) {
        this.formG.get('tamanhoEscolhido').setValidators(Validators.required);
      }
    }
  }

  _produto: any = {};

  formG = this.fb.group({
    quantidade: [1, [Validators.required, Validators.min(0)]],
    corEscolhida: [null],
    tamanhoEscolhido: [null],
  });

  selectedFotoIdx: number = 0;

  valorUnidade: number = 0;

  constructor(
    private carrinhoService: CarrinhoService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.calculaValorUnidade();

    this.formG.get('corEscolhida').valueChanges.subscribe((cor) => {
      this.calculaValorUnidade();
    });
    this.formG.get('tamanhoEscolhido').valueChanges.subscribe((value) => {
      this.calculaValorUnidade();
    });
  }

  formatarValor(value) {
    return format(value);
  }

  calculaValorUnidade(): void {
    const cor = this.produto.corUnica || this.formG.get('corEscolhida').value;
    const tamanho =
      this.produto.tamanhoUnico || this.formG.get('tamanhoEscolhido').value;

    const estoque: Estoque = this.produto.estoques.find((el) => {
      let sameColor = el.cor.id === cor?.id;
      let sameTamanho = el.tamanho.id === tamanho?.id;

      return sameColor && sameTamanho;
    });

    let valorUnidade = 0;

    if (estoque) {
      valorUnidade = this.produto.valorBase + estoque.acrescimoValor;
    } else {
      valorUnidade = this.produto.valorBase;
    }

    this.valorUnidade = valorUnidade;
  }

  comprarAgora() {
    this.addItemAoCarrinho();
    this.router.navigateByUrl('/carrinho');
  }

  addItemAoCarrinho() {
    const { quantidade, corEscolhida, tamanhoEscolhido } = this.formG.value;

    const tamanho = this.produto.tamanhoUnico || tamanhoEscolhido;
    const cor = this.produto.corUnica || corEscolhida;

    const estoque = this.produto.estoques.find((e) => {
      let sameCor = e.cor?.id === cor?.id;
      let sameTamanho = e.tamanho?.id === tamanho?.id;

      return sameCor && sameTamanho;
    });

    console.log('estoque', estoque);

    this.carrinhoService.addItem({
      produto: this.produto,
      subTotal: this.produto.valorBase * quantidade,
      corEscolhida: cor,
      tamanhoEscolhido: tamanho,
      quantidade,
      estoque,
    });
  }
}
