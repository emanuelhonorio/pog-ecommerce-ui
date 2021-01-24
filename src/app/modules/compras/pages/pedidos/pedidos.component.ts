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
    this.compras = <Compra[]>await this.comprasService.list();

    console.log('compras', this.compras);
  }

  formatarValor(valor: number) {
    return format(valor);
  }
}
