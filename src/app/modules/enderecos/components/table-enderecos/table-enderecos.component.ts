import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Endereco } from 'src/app/core/models/api-models';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-table-enderecos',
  templateUrl: './table-enderecos.component.html',
  styleUrls: ['./table-enderecos.component.scss'],
})
export class TableEnderecosComponent implements OnInit {
  @Input()
  public enderecos: Endereco[] = [];

  @Output()
  delete = new EventEmitter();

  @Output()
  edit = new EventEmitter();

  displayedColumns: string[] = [
    'id',
    'cep',
    'numero',
    'complemento',
    'actions',
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  onEdit(element) {
    this.edit.emit(element);
  }

  onDelete(element) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      data: {
        title: 'Excluir endereco',
        message: 'Tem certeza que deseja excluir endereço com id ' + element.id,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.delete.emit(element.id);
      }
    });
  }
}
