import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProdutosService } from 'src/app/core/services/produtos.service';

@Component({
  selector: 'app-manage-produtos',
  templateUrl: './manage-produtos.component.html',
  styleUrls: ['./manage-produtos.component.scss'],
})
export class ManageProdutosComponent implements OnInit {
  produtos: any[] = [];

  produtoFilter = {
    nome: '',
  };

  totalElements: number = 0;
  itensPerPage: number = 6;

  page: number = 0;

  constructor(
    private produtosService: ProdutosService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadProdutos();
  }

  onFormInput(event) {
    this.loadProdutos();
  }

  clearField(fieldName) {
    if (this.produtoFilter[fieldName]) this.produtoFilter[fieldName] = '';
    this.loadProdutos();
  }

  async loadProdutos() {
    const { content, totalElements } = await this.produtosService.list(
      this.produtoFilter,
      this.page,
      this.itensPerPage
    );

    this.totalElements = totalElements;
    this.produtos = content;
  }

  async handleDeleteProduto(produtoId) {
    try {
      await this.produtosService.delete(produtoId);
      this.loadProdutos();
      this.toastr.success('Item removido com sucesso');
    } catch (ex) {
      console.error(ex);
      this.toastr.error('Erro ao remover produto');
    }
  }

  async handleEditProduto(produtoId) {
    this.router.navigate([produtoId, 'update'], { relativeTo: this.route });
  }

  async handleManageStock(produtoId) {
    this.router.navigate([produtoId, 'estoque'], { relativeTo: this.route });
  }

  onPageChange(event) {
    this.page = event.pageIndex;
    this.loadProdutos();
  }
}
