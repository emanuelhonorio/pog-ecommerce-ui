import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Compra, CompraFilter } from 'src/app/core/models/api-models';
import { ComprasService } from 'src/app/core/services/compras.service';

@Component({
  templateUrl: './manage-pedidos.component.html',
  styleUrls: ['./manage-pedidos.component.scss'],
})
export class ManagePedidosComponent implements OnInit {
  compras: Compra[] = [];

  loading: boolean = true;
  error: boolean = false;

  filterPedidoForm = this.fb.group({
    id: [null],
    data: [null],
    status: [null],
    entregue: [false],
    deleted: [false],
  });

  pedidoFilter: CompraFilter = this.filterPedidoForm.value || {};

  tabIndex: number = 0;

  constructor(private compraService: ComprasService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loadCompras();

    this.filterPedidoForm.valueChanges.subscribe((values) => {
      this.pedidoFilter = values;
      this.loadCompras();
    });
  }

  async loadCompras() {
    this.error = false;
    this.loading = true;
    try {
      this.compras = <Compra[]>(
        (<any>await this.compraService.listOfAllUsers(this.pedidoFilter))
          .content
      );
    } catch (err) {
      this.error = true;
      console.error(err);
    }
    this.loading = false;
  }

  limparFiltros() {
    this.filterPedidoForm.patchValue({ id: null, data: null, status: null });
  }

  onSelectedTabChange(event) {
    this.compras = [];
    if (event.index === 0) {
      this.filterPedidoForm.patchValue({ entregue: false, deleted: false });
    } else if (event.index === 1) {
      this.filterPedidoForm.patchValue({ entregue: true, deleted: false });
    } else if (event.index === 2) {
      this.filterPedidoForm.patchValue({ entregue: null, deleted: true });
    }
    this.tabIndex = event.index;
  }
}
