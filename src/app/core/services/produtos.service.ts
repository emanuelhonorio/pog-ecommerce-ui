import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateProdutoDTO, ProdutoFilter } from '../models/api-models';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  private baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  list(produtoFilter: ProdutoFilter): Promise<any> {
    if (!produtoFilter) throw Error('produtoFilter is required');

    let params = new HttpParams();

    if (produtoFilter?.nome) {
      params = params.append('nome', produtoFilter.nome);
    }

    if (produtoFilter?.marca) {
      params = params.append('marca', produtoFilter.marca);
    }

    if (produtoFilter?.valorDe) {
      params = params.append('valorDe', '' + produtoFilter.valorDe);
    }

    if (produtoFilter?.valorAte) {
      params = params.append('valorAte', '' + produtoFilter.valorAte);
    }

    if (produtoFilter?.categorias) {
      params = params.append('categorias', produtoFilter.categorias.join(','));
    }

    return <Promise<any>>(
      this.http.get(`${this.baseApiUrl}/produtos`, { params }).toPromise()
    );
  }

  formatValor(valor: number) {
    return valor.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  wrapInfo(produtos: any[]): any[] {
    return produtos.map((p) => {
      return {
        ...p,
        corUnica: p.cores.length === 1 ? p.cores[0] : null,
        tamanhoUnico: p.tamanhos.length === 1 ? p.tamanhos[0] : null,
        valorBaseFormatado: this.formatValor(p.valorBase),
        disponivel: p.estoques.reduce((isDisponivel: boolean, el: any) => {
          return isDisponivel || el.qtdEstoque > 0;
        }, false),
      };
    });
  }

  findById(produtoId: number): Promise<any> {
    return <Promise<any>>(
      this.http.get(`${this.baseApiUrl}/produtos/${produtoId}`).toPromise()
    );
  }

  create(produto: CreateProdutoDTO) {
    return this.http.post(`${this.baseApiUrl}/produtos`, produto).toPromise();
  }

  update(produtoId: number, produto: CreateProdutoDTO) {
    return this.http
      .put(`${this.baseApiUrl}/produtos/${produtoId}`, produto)
      .toPromise();
  }

  delete(produtoId: number) {
    return this.http
      .delete(`${this.baseApiUrl}/produtos/${produtoId}`)
      .toPromise();
  }
}
