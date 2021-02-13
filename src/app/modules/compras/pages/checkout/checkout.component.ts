import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import {
  CompraDTO,
  Endereco,
  TipoPagamentoEnum,
} from 'src/app/core/models/api-models';
import {
  Carrinho,
  CarrinhoService,
} from 'src/app/core/services/carrinho.service';
import { ComprasService } from 'src/app/core/services/compras.service';
import { EnderecosService } from 'src/app/core/services/enderecos.service';
import { StripeService } from 'src/app/core/services/stripe.service';

import { format } from '../../../../shared/util/formatter';

@Component({
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit, OnDestroy {
  enderecos: Endereco[] = [];
  selectedEnderecoId: number = null;
  enderecoInfoMap = {}; // key: cep value: info

  modo = {
    modoDePagamento: TipoPagamentoEnum.A_VISTA,
    trocoPara: null,
  };

  carrinho$: Subscription;
  carrinho: Carrinho = null;

  loading: boolean = false;

  constructor(
    private enderecosService: EnderecosService,
    private carrinhoService: CarrinhoService,
    private compraService: ComprasService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private stripeService: StripeService
  ) {}

  ngOnInit(): void {
    this.initEnderecos();
    this.carrinho$ = this.carrinhoService.carrinho$.subscribe((carrinho) => {
      this.carrinho = carrinho;
    });

    if (this.route.snapshot.queryParams['canceled']) {
      this.toastr.error(
        'Falha no checkout, confira os dados e tente novamente'
      );
      this.modo.modoDePagamento = TipoPagamentoEnum.CARTAO;
    }
  }

  ngOnDestroy() {
    if (this.carrinho$) this.carrinho$.unsubscribe();
  }

  get disabled() {
    return !this.selectedEnderecoId && !this.modo?.modoDePagamento;
  }

  async initEnderecos() {
    try {
      this.enderecos = <Endereco[]>await this.enderecosService.list();
    } catch (err) {
      console.error(err);
    }

    if (this.enderecos.length > 0) {
      this.selectedEnderecoId = this.enderecos[0].id;

      for (let endereco of this.enderecos) {
        try {
          const cepInfo = await this.enderecosService.consultarCep(
            endereco.cep
          );
          this.enderecoInfoMap[endereco.cep] = cepInfo;
        } catch (err) {
          console.error(err);
        }
      }
    }
  }

  async finalizarCompra() {
    this.loading = true;

    try {
      // Fill compraDTO object
      const compraDTO: CompraDTO = {
        enderecoId: this.selectedEnderecoId,
        tipoPagamento: this.modo.modoDePagamento,
        trocoPara: this.modo.trocoPara,
        itens: [],
      };

      // Fill compraDTO items
      for (let item of this.carrinho.items) {
        compraDTO.itens.push({
          corId: item.corEscolhida?.id,
          tamanhoId: item.tamanhoEscolhido?.id,
          produtoId: item.produto.id,
          quantidade: item.quantidade,
        });
      }

      // if card redirect to stripe API
      if (compraDTO.tipoPagamento == TipoPagamentoEnum.CARTAO) {
        let session = <any>(
          await this.stripeService.createCheckoutSession(compraDTO)
        );

        await this.stripeService.redirectToCheckout(session.id);
      } else {
        // use pog API
        await this.compraService.comprar(compraDTO);
        this.toastr.success('compra finalizada com sucesso');
      }

      this.carrinhoService.limparCarrinho();
      this.router.navigateByUrl('/pedidos');
    } catch (err) {
      console.error(err);

      if (err?.error?.message) {
        this.toastr.error(err?.error?.message);
      } else {
        this.toastr.error('Erro ao finalizar compra');
      }
    }

    this.loading = false;
  }

  formatarValor(valor: number) {
    return format(valor);
  }
}
