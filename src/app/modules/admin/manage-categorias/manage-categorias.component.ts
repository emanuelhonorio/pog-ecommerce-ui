import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoriaI } from 'src/app/core/models/api-models';
import { CategoriasService } from 'src/app/core/services/categorias.service';
import { DialogCreateCategoriasComponent } from '../components/dialog-create-categorias/dialog-create-categorias.component';

@Component({
  selector: 'app-manage-categorias',
  templateUrl: './manage-categorias.component.html',
  styleUrls: ['./manage-categorias.component.scss']
})
export class ManageCategoriasComponent implements OnInit {

  public categorias: CategoriaI[] = [];

  constructor(private dialog: MatDialog, private categoriasService: CategoriasService) {}

  ngOnInit(): void {
    this.loadCategorias();
  }

  async loadCategorias() {
    this.categorias = await this.categoriasService.list();
  }

  createCategoriaDialog(): void {
    const dialogRef = this.dialog.open(DialogCreateCategoriasComponent, {
      width: '250px',
      data: { name: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.createCategoria(result);
    });
  }

  async createCategoria(nomeCategoria: string) {
    await this.categoriasService.create({ nome: nomeCategoria });
    this.loadCategorias();
  }

}
