import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-produtos',
  templateUrl: './table-produtos.component.html',
  styleUrls: ['./table-produtos.component.scss']
})
export class TableProdutosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'actions'];

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

  constructor() { }

  ngOnInit(): void {
  }

}
