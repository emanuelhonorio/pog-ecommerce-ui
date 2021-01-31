import { Component, Input, OnInit } from '@angular/core';
import { ItemCompra } from 'src/app/core/models/api-models';

import { format } from '../../../../shared/util/formatter';

@Component({
  selector: 'app-table-itens-pedido-material',
  templateUrl: './table-itens-pedido-material.component.html',
  styleUrls: ['./table-itens-pedido-material.component.scss'],
})
export class TableItensPedidoMaterialComponent implements OnInit {
  @Input()
  itens: ItemCompra[] = [];

  displayedColumns: string[] = [
    'thumb',
    'name',
    'price',
    'qtd',
    'discount',
    'total',
  ];

  constructor() {}

  ngOnInit(): void {}

  formatarValor(valor: number) {
    return format(valor);
  }
}
