import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-table-estoques',
  templateUrl: './table-estoques.component.html',
  styleUrls: ['./table-estoques.component.scss'],
})
export class TableEstoquesComponent {
  @Input()
  produto;

  @Output()
  delete = new EventEmitter();

  @Output()
  edit = new EventEmitter();

  columnsToDisplay = [
    'id',
    'cor',
    'tamanho',
    'quantidade',
    'acrescimoValor',
    'actions',
  ];
  expandedElement: any;

  constructor(private dialog: MatDialog) {}

  onDelete(element): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      data: {
        title: 'Excluir estoque',
        message: 'Tem certeza que deseja excluir estoque com id ' + element.id,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.delete.emit(element.id);
      }
    });
  }
}
