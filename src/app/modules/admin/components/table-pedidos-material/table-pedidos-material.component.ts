import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Compra, CompraFilter } from 'src/app/core/models/api-models';
import { ComprasService } from 'src/app/core/services/compras.service';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { FormatDateService } from 'src/app/shared/services/format-date.service';

import { format } from '../../../../shared/util/formatter';

@Component({
  selector: 'app-table-pedidos-material',
  templateUrl: './table-pedidos-material.component.html',
  styleUrls: ['./table-pedidos-material.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class TablePedidosMaterialComponent implements OnInit {
  @Input()
  compras: Compra[] = [];

  @Input()
  filter: CompraFilter = {};

  isDeleting: boolean = false;

  columnsToDisplay = [
    'id',
    'created_at',
    'usuario',
    'total',
    'status',
    'expand',
  ];

  expandedElement: Compra | null;

  constructor(
    private comprasService: ComprasService,
    private toastr: ToastrService,
    private dialog: MatDialog,
    private formatDateService: FormatDateService
  ) {}

  ngOnInit(): void {}

  formatarValor(valor: number) {
    return format(valor);
  }

  async loadPedidos() {
    try {
      this.compras = this.compras = <Compra[]>(
        (<any>await this.comprasService.listOfAllUsers(this.filter)).content
      );
    } catch (err) {
      console.error(err);
      this.toastr.error('Erro ao carregar produtos');
    }
  }

  async onDeletarPedido(pedido) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      data: {
        title: 'Alterar status',
        message: `Tem certeza que deseja excluir esse pedido?`,
      },
    });

    dialogRef.afterClosed().subscribe(async (result) => {
      if (result) {
        this.isDeleting = true;
        try {
          await this.comprasService.deletar(pedido.id);
          this.loadPedidos();
          this.toastr.success('pedido deletado com sucesso');
        } catch (err) {
          this.toastr.error('Erro ao deletar pedido');
          console.error(err);
        }
        this.isDeleting = false;
      }
    });
  }

  async onChangeStatus(pedido, status) {
    try {
      await this.comprasService.atualizarStatus(pedido.id, status);
      this.loadPedidos();
      this.toastr.success('Status do pedido atualizado com sucesso');
    } catch (err) {
      this.toastr.error('Erro ao atualizar status do pedido');
      console.error(err);
    }
  }

  formatDateFromNow(date: Date): string {
    if (date) {
      return this.formatDateService.formatDateFromNow(date);
    }
    return '';
  }

  onExpand(element: Compra) {
    this.expandedElement = this.elementIsExpanded(element) ? null : element;
  }

  elementIsExpanded(element): boolean {
    return element ? this.expandedElement?.id === element.id : false;
  }
}
