import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Categoria } from 'src/app/core/models/api-models';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-table-categorias',
  templateUrl: './table-categorias.component.html',
  styleUrls: ['./table-categorias.component.scss'],
})
export class TableCategoriasComponent implements OnInit {
  @Input()
  public categorias: Categoria[] = [];

  @Output()
  edit = new EventEmitter();

  @Output()
  delete = new EventEmitter();

  displayedColumns: string[] = ['id', 'nome', 'buttons'];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  onDelete(element): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      data: {
        title: 'Excluir categoria',
        message:
          'Tem certeza que deseja excluir a categoria de ' + element?.nome,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.delete.emit(element.id);
      }
    });
  }
}
