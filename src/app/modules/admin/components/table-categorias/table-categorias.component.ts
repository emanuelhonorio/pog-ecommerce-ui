import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from 'src/app/core/models/api-models';

@Component({
  selector: 'app-table-categorias',
  templateUrl: './table-categorias.component.html',
  styleUrls: ['./table-categorias.component.scss'],
})
export class TableCategoriasComponent implements OnInit {
  @Input()
  public categorias: Categoria[] = [];

  displayedColumns: string[] = ['id', 'nome'];

  constructor() {}

  ngOnInit(): void {}
}
