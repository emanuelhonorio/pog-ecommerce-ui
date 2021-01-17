import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from 'src/app/core/services/produtos.service';

@Component({
  selector: 'app-save-produtos',
  templateUrl: './save-produtos.component.html',
  styleUrls: ['./save-produtos.component.scss'],
})
export class SaveProdutosComponent implements OnInit {
  public produtoId: number;

  public isUpdating: boolean;

  public produto: any;

  public loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutosService
  ) {}

  ngOnInit(): void {
    this.produtoId = parseInt(this.route.snapshot.paramMap.get('produtoId'));

    if (this.produtoId) {
      this.isUpdating = true;
      this.loadProduto();
    }
  }

  async loadProduto() {
    this.loading = true;
    this.produto = await this.produtoService.findById(this.produtoId);
    this.loading = false;
  }

  async handleSaveProduto(produto: any) {
    this.router.navigateByUrl('/admin/produtos');
  }
}
