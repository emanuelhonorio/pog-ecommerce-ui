import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { EstoquesService } from 'src/app/core/services/estoques.service';
import { ProdutosService } from 'src/app/core/services/produtos.service';

@Component({
  selector: 'app-manage-produtos-estoque',
  templateUrl: './manage-produtos-estoque.component.html',
  styleUrls: ['./manage-produtos-estoque.component.scss'],
})
export class ManageProdutosEstoqueComponent implements OnInit {
  produtoId: number;
  produto: any = {};
  estoque: any; // in case is updating

  constructor(
    private ps: ProdutosService,
    private estoquesService: EstoquesService,
    private dialog: MatDialog,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.produtoId = Number(this.route.snapshot.paramMap.get('produtoId'));
    this.loadProduto();
  }

  async loadProduto() {
    this.produto = await this.ps.findById(this.produtoId);
  }

  onSaveProdutoEstoque(produtoEstoque: any) {
    this.loadProduto();
  }

  openDialog(templateRef) {
    this.dialog.open(templateRef, {
      width: '700px',
    });
  }

  async handleDeleteEstoque(event) {
    await this.estoquesService.delete(event);
    this.loadProduto();
  }

  handleEditEstoque(event, templateRef) {
    this.estoque = this.produto.estoques.find((e) => e.id === event);

    let dialogRef = this.dialog.open(templateRef, {
      width: '700px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.estoque = null;
    });
  }
}
