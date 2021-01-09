import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from 'src/app/core/services/produtos.service';

@Component({
  selector: 'app-manage-produtos',
  templateUrl: './manage-produtos.component.html',
  styleUrls: ['./manage-produtos.component.scss']
})
export class ManageProdutosComponent implements OnInit {

  showFormProdutos: boolean = false;
  produtos: any[] = [];
  
  constructor(private produtosService: ProdutosService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadProdutos();
  }

  toggleFormProdutos() {
    this.showFormProdutos = !this.showFormProdutos;
  }

  async loadProdutos() {
    this.produtos = (await this.produtosService.list()).content;
  }

  async onNewProduto(produto: any) {
    this.loadProdutos();
  }

  async handleDeleteProduto(produtoId) {
    await this.produtosService.delete(produtoId);
    this.loadProdutos();
  }

  async handleEditProduto(produtoId) {
    console.log('edit', produtoId)
  }

  async handleManageStock(produtoId) {
    this.router.navigate([produtoId, 'estoque'], { relativeTo: this.route })
  }

}
