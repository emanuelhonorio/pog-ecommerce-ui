import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Produto } from 'src/app/core/models/api-models';
import { ProdutosService } from 'src/app/core/services/produtos.service';

@Component({
  selector: 'app-save-produtos',
  templateUrl: './save-produtos.component.html',
  styleUrls: ['./save-produtos.component.scss'],
})
export class SaveProdutosComponent implements OnInit {
  public produtoId: number;

  public produto: Produto = null;

  public loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutosService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.produtoId = parseInt(this.route.snapshot.paramMap.get('produtoId'));

    if (this.produtoId) {
      this.loadProduto();
    }
  }

  async loadProduto() {
    this.loading = true;
    try {
      this.produto = await this.produtoService.findById(this.produtoId);
    } catch (err) {
      console.error(err);
    }
    this.loading = false;
  }

  async handleSaveProduto(produto: any, isUpdating: boolean) {
    console.log('save', produto);
    this.loading = true;

    try {
      if (isUpdating) {
        await this.produtoService.update(this.produtoId, produto);
        this.loadProduto();
        this.toastr.success('produto atualizado com sucesso');
      } else {
        await this.produtoService.create(produto);
        this.toastr.success('produto criado com sucesso');
        this.router.navigateByUrl('/admin/produtos');
      }
    } catch (err) {
      console.error(err);
      this.toastr.error('erro ao salvar produto');
    }

    this.loading = false;
  }
}
