import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-dropdown-update-status-pedido',
  templateUrl: './dropdown-update-status-pedido.component.html',
  styleUrls: ['./dropdown-update-status-pedido.component.scss'],
})
export class DropdownUpdateStatusPedidoComponent implements OnInit {
  @Input()
  selectedStatus: 'PENDING' | 'CONFIRMED' | 'IN_TRANSPORT' | 'DELIVERED' =
    'PENDING';

  @Output()
  select = new EventEmitter();

  public statusMap = {
    DELIVERED: {
      description: 'Entregue',
      variantClass: 'green',
    },
    IN_TRANSPORT: {
      description: 'Em trânsito',
      variantClass: 'blue',
    },
    CONFIRMED: {
      description: 'Confirmado',
      variantClass: 'green',
    },
    PENDING: {
      description: 'Pendente',
      variantClass: 'yellow',
    },
  };

  isOpen: boolean = false;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  onSelectStatus(status) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      data: {
        title: 'Alterar status',
        message: `Alterar status de ${
          this.statusMap[this.selectedStatus].description
        } para ${status.value.description}?`,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.select.emit(status.key);
      }

      this.isOpen = false;
    });
  }
}
