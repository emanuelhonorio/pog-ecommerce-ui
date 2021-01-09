import { Component, Input, OnInit } from '@angular/core';
import { CategoriaI } from 'src/app/core/models/api-models';

@Component({
  selector: 'app-table-categorias',
  templateUrl: './table-categorias.component.html',
  styleUrls: ['./table-categorias.component.scss']
})
export class TableCategoriasComponent implements OnInit {

  @Input()
  public categorias: CategoriaI[] = [];
  
  displayedColumns: string[] = ['id', 'nome'];

  constructor() { }

  ngOnInit(): void {
  }
}
