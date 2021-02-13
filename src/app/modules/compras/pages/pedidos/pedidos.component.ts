import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Compra, StatusCompraEnum } from 'src/app/core/models/api-models';
import { ComprasService } from 'src/app/core/services/compras.service';

import { format } from '../../../../shared/util/formatter';

@Component({
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss'],
})
export class PedidosComponent implements OnInit {
  compras: Compra[] = [];

  constructor(
    private comprasService: ComprasService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.initPedidos();

    if (this.route.snapshot.queryParams['success']) {
      this.toastr.success(
        'Pagamento realizado com sucesso, acompanhe o pedido por aqui'
      );
    }
  }

  async initPedidos() {
    this.compras = <Compra[]>(<any>await this.comprasService.list({})).content;

    console.log('compras', this.compras);
  }

  getStatusDescription(statusCompra: keyof typeof StatusCompraEnum) {
    switch (statusCompra) {
      case 'PENDING':
        return 'Aguardando confirmação';
      case 'DONE':
        return 'Pedido confirmado';
      case 'PREPARING':
        return 'Preparando pedido';
      case 'IN_TRANSIT':
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
