import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private produtosService: ProdutosService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadProdutos();
  }

  onFormInput(event) {
    this.filtrar();
  }

  clearField(fieldName) {
    if (this.produtoFilter[fieldName]) this.produtoFilter[fieldName] = '';
    this.filtrar();
  }

  async filtrar() {
    this.produtos = (
      await this.produtosService.list(this.produtoFilter)
    ).content;
  }

  async loadProdutos() {
    this.produtos = (await this.produtosService.list({})).content;
  }

  async handleDeleteProduto(produtoId) {
    await this.produtosService.delete(produtoId);
    this.loadProdutos();
  }

  async handleEditProduto(produtoId) {
    this.router.navigate([produtoId, 'update'], { relativeTo: this.route });
  }

  async handleManageStock(produtoId) {
    this.router.navigate([produtoId, 'estoque'], { relativeTo: this.route });
  }
}
