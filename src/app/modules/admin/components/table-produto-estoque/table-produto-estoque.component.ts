import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

export interface TableElement {
  id: string;
  cor: string;
  tamanho: string;
  quantidade: number;
  valor: number;
}

@Component({
  selector: 'app-table-produto-estoque',
  templateUrl: './table-produto-estoque.component.html',
  styleUrls: ['./table-produto-estoque.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableProdutoEstoqueComponent implements OnInit {

  @Input()
  produto;

  @Output()
  delete = new EventEmitter();

  @Output()
  edit = new EventEmitter();

  columnsToDisplay = ['id', 'cor', 'tamanho', 'quantidade', 'valor', 'actions'];
  expandedElement: any;

  constructor() { }

  ngOnInit(): void {
  }

}
