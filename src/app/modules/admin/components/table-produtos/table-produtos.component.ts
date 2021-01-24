import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-table-produtos',
  templateUrl: './table-produtos.component.html',
  styleUrls: ['./table-produtos.component.scss'],
})
export class TableProdutosComponent {
  displayedColumns: string[] = ['id', 'nome', 'marca', 'valor base', 'actions'];

  @Input()
  produtos: any[] = [];

  @Output()
  delete = new EventEmitter();

  @Output()
  edit = new EventEmitter();

  @Output()
  manageStock = new EventEmitter();

  @Output()
  inspect = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  onDelete(element): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      data: {
        title: 'Excluir produto',
        message: 'Tem certeza que deseja excluir produto com id ' + element.id,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.delete.emit(element.id);
      }
    });
  }
}
