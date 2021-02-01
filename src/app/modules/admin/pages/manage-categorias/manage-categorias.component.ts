import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/core/models/api-models';
import { CategoriasService } from 'src/app/core/services/categorias.service';
import { DialogCreateCategoriasComponent } from '../../components/dialog-create-categorias/dialog-create-categorias.component';

@Component({
  selector: 'app-manage-categorias',
  templateUrl: './manage-categorias.component.html',
  styleUrls: ['./manage-categorias.component.scss'],
})
export class ManageCategoriasComponent implements OnInit {
  public categorias: Categoria[] = [];

  error: boolean = false;

  loadingSave: boolean = false;

  constructor(
    private dialog: MatDialog,
    private categoriasService: CategoriasService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadCategorias();
  }

  async loadCategorias() {
    this.error = false;
    try {
      this.categorias = await this.categoriasService.list();
    } catch (err) {
      console.error(err);
      this.error = true;
    }
  }

  createCategoriaDialog(categoria: Categoria): void {
    const isUpdating = !!categoria;

    const dialogRef = this.dialog.open(DialogCreateCategoriasComponent, {
      width: '300px',
      data: { name: categoria?.nome || '', isUpdating },
    });

    dialogRef.afterClosed().subscribe((name) => {
      if (name) {
        if (isUpdating) {
          this.updateCategoria(categoria.id, name);
        } else {
          this.createCategoria(name);
        }
      }
    });
  }

  async updateCategoria(id: number, nome: string) {
    this.loadingSave = true;
    try {
      await this.categoriasService.update(id, { nome });
      this.loadCategorias();
      this.toastr.success('categoria atualizada com sucesso');
    } catch (err) {
      this.toastr.error('erro ao atualizar categoria');
      console.error(err);
    }

    this.loadingSave = false;
  }

  async createCategoria(nome: string) {
    this.loadingSave = false;
    try {
      await this.categoriasService.create({ nome });
      this.loadCategorias();
      this.toastr.success('categoria criada com sucesso');
    } catch (err) {
      this.toastr.error('erro ao atualizar categoria');
      console.error(err);
    }

    this.loadingSave = true;
  }

  async handleDelete(categoriaId: number) {
    try {
      await this.categoriasService.delete(categoriaId);
      this.loadCategorias();
      this.toastr.success('categoria deletada com sucesso');
    } catch (err) {
      console.error(err);
      this.toastr.error('erro ao deletar categoria');
      if (err?.error?.status === 409) {
        this.toastr.error(
          'categoria está sendo referenciada por um ou mais produtos'
        );
      }
    }
  }

  handleEdit(categoria: Categoria) {
    this.createCategoriaDialog(categoria);
  }
}
