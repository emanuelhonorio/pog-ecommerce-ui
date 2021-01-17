import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from 'src/app/core/services/produtos.service';

@Component({
  selector: 'app-produto-details',
  templateUrl: './produto-details.component.html',
  styleUrls: ['./produto-details.component.scss'],
})
export class ProdutoDetailsComponent implements OnInit {
  produto: any = {};
  produtoId: number;

  loading: boolean = true;
  notFound: boolean = false;

  constructor(
    private produtoService: ProdutosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.produtoId = +this.route.snapshot.paramMap.get('id');

    if (isNaN(this.produtoId)) {
      this.loading = false;
      this.notFound = true;
      return;
    }

    this.loadProduto();
  }

  async loadProduto() {
    try {
      this.produto = await this.produtoService.findById(this.produtoId);
    } catch (err) {
      this.loading = false;
      this.notFound = true;
      return;
    }

    // TODO: devido a api estar retornando status 200, não está entrando no catch
    if (this.produto?.status === 404) {
      this.loading = false;
      this.notFound = true;
      return;
    }

    this.produto = this.produtoService.wrapInfo([this.produto])[0];
    this.loading = false;
  }
}
