import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

export interface TableElement {
  id: string;
  cor: string;
  tamanho: string;
  quantidade: number;
  acrescimoValor: number;
}

@Component({
  selector: 'app-table-variacoes',
  templateUrl: './table-variacoes.component.html',
  styleUrls: ['./table-variacoes.component.scss']
})
export class TableVariacoesComponent implements OnInit {

  @Input()
  produto;

  @Output()
  delete = new EventEmitter();

  @Output()
  edit = new EventEmitter();

  columnsToDisplay = ['id', 'cor', 'tamanho', 'quantidade', 'acrescimoValor', 'actions'];
  expandedElement: any;

  constructor() { }

  ngOnInit(): void {
  }

}
