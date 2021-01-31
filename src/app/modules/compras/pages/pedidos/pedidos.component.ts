import { Component, OnInit } from '@angular/core';
import { Compra } from 'src/app/core/models/api-models';
import { ComprasService } from 'src/app/core/services/compras.service';

import { format } from '../../../../shared/util/formatter';

@Component({
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss'],
})
export class PedidosComponent implements OnInit {
  compras: Compra[] = [];

  constructor(private comprasService: ComprasService) {}

  ngOnInit(): void {
    this.initPedidos();
  }

  async initPedidos() {
    this.compras = <Compra[]>(<any>await this.comprasService.list({})).content;

    console.log('compras', this.compras);
  }

  getStatusDescription(statusCompra: string) {
    switch (statusCompra) {
      case 'PENDING':
        return 'Aguardando confirmação';
      case 'CONFIRMED':
        return 'Pedido confirmado';
      case 'IN_TRANSPORT':
        return 'Em transporte';
      case 'DELIVERED':
        return 'Entregue';
      default:
        return 'Status inválido';
    }
  }

  formatarValor(valor: number) {
    return format(valor);
  }
}
