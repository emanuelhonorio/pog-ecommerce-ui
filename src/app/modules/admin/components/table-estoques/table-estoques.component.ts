import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-estoques',
  templateUrl: './table-estoques.component.html',
  styleUrls: ['./table-estoques.component.scss'],
})
export class TableEstoquesComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
