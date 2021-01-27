import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { EstoquesService } from 'src/app/core/services/estoques.service';
import { ProdutosService } from 'src/app/core/services/produtos.service';

import { ToastrService } from 'ngx-toastr';
import { CreateEstoqueDTO, Estoque } from 'src/app/core/models/api-models';

@Component({
  selector: 'app-manage-produtos-estoque',
  templateUrl: './manage-produtos-estoque.component.html',
  styleUrls: ['./manage-produtos-estoque.component.scss'],
})
export class ManageProdutosEstoqueComponent implements OnInit {
  produtoId: number;
  produto: any = {};
  estoque: Estoque = null; // in case is updating

  estoqueSavingLoading: boolean = false;

  constructor(
    private ps: ProdutosService,
    private estoquesService: EstoquesService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.produtoId = Number(this.route.snapshot.paramMap.get('produtoId'));
    this.loadProduto();
  }

  async loadProduto() {
    try {
      this.produto = await this.ps.findById(this.produtoId);
    } catch (err) {
      console.log(err);
    }
  }

  async handleSaveEstoque(estoque: any, isUpdating: boolean = false) {
    this.estoqueSavingLoading = true;

    const estoqueData: CreateEstoqueDTO = {
      ...estoque,
      produtoId: this.produtoId,
      corId: estoque.cor,
      tamanhoId: estoque.tamanho,
    };

    try {
      if (isUpdating) {
        this.estoque = await this.estoquesService.update(
          estoque.id,
          estoqueData
        );
        this.toastr.success('estoque atualizado com sucesso');
      } else {
        await this.estoquesService.create(estoqueData);
        this.toastr.success('estoque adicionado com sucesso');
      }
      this.loadProduto();
    } catch (err) {
      console.error(err);
      this.toastr.error('erro ao salvar estoque');
    }
    this.estoqueSavingLoading = false;
  }

  async handleDeleteEstoque(event) {
    try {
      await this.estoquesService.delete(event);
      this.toastr.success('estoque deletado com sucesso');
      this.loadProduto();
    } catch (err) {
      console.error(err);
      this.toastr.error('erro ao deletar estoque');
    }
  }

  openDialogEditEstoque(estoqueId: number, templateRef) {
    this.estoque = this.produto.estoques.find((e) => e.id === estoqueId);

    let dialogRef = this.dialog.open(templateRef, {
      width: '700px',
    });

    dialogRef.afterClosed().subscribe((_) => {
      this.estoque = null;
    });
  }

  openDialogCreateEstoque(templateRef) {
    this.dialog.open(templateRef, {
      width: '700px',
    });
  }
}
