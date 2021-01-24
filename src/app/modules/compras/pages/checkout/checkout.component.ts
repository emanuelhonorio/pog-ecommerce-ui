import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { CompraDTO, Endereco } from 'src/app/core/models/api-models';
import {
  Carrinho,
  CarrinhoService,
} from 'src/app/core/services/carrinho.service';
import { ComprasService } from 'src/app/core/services/compras.service';
import { EnderecosService } from 'src/app/core/services/enderecos.service';

import { format } from '../../../../shared/util/formatter';

@Component({
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  enderecos: Endereco[] = [];
  selectedEnderecoId: number = null;
  enderecoInfoMap = {}; // key: cep value: info

  carrinho$: Subscription;
  carrinho: Carrinho = null;

  loading: boolean = false;

  constructor(
    private enderecosService: EnderecosService,
    private carrinhoService: CarrinhoService,
    private compraService: ComprasService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initEnderecos();
    this.carrinho$ = this.carrinhoService.carrinho$.subscribe((carrinho) => {
      this.carrinho = carrinho;
    });
  }

  get disabled() {
    return !this.selectedEnderecoId;
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

  formatarValor(valor: number) {
    return format(valor);
  }

  async finalizarCompra() {
    this.loading = true;

    try {
      const compraDTO: CompraDTO = {
        enderecoId: this.selectedEnderecoId,
        itens: [],
      };

      for (let item of this.carrinho.items) {
        compraDTO.itens.push({
          corId: item.corEscolhida?.id,
          tamanhoId: item.tamanhoEscolhido?.id,
          produtoId: item.produto.id,
          quantidade: item.quantidade,
        });
      }

      await this.compraService.comprar(compraDTO);

      this.router.navigateByUrl('/pedidos');

      this.carrinhoService.limparCarrinho();

      this.toastr.success('compra finalizada com sucesso');
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
}
