import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateProdutoDTO, Produto, ProdutoFilter } from '../models/api-models';

import { format } from '../../shared/util/formatter';

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

    if (produtoFilter?.page) {
      params = params.append('page', '' + produtoFilter.page);
    }

    if (produtoFilter?.size) {
      params = params.append('size', '' + produtoFilter.size);
    }

    return <Promise<any>>(
      this.http.get(`${this.baseApiUrl}/produtos`, { params }).toPromise()
    );
  }

  wrapInfo(produtos: Produto[]): any[] {
    let coresDisponiveis = {};
    let tamanhosDisponiveis = {};

    return produtos.map((p) => {
      let produtoDisponivel: boolean = false;
      return {
        ...p,
        estoques: p.estoques.map((estoque) => {
          const estoqueWrap: any = { ...estoque };

          if (estoque.qtdEstoque > 0) {
            produtoDisponivel = true;
            estoqueWrap.disponivel = true;
            coresDisponiveis[estoque.cor?.id] = true;
            tamanhosDisponiveis[estoque.tamanho?.id] = true;
          } else {
            estoqueWrap.disponivel = false;
          }

          return estoqueWrap;
        }),
        cores: p.cores.map((cor) => {
          return { ...cor, disponivel: coresDisponiveis[cor?.id] || false };
        }),
        tamanhos: p.tamanhos.map((tamanho) => {
          return {
            ...tamanho,
            disponivel: tamanhosDisponiveis[tamanho?.id] || false,
          };
        }),
        corUnica: p.cores.length === 1 ? p.cores[0] : null,
        tamanhoUnico: p.tamanhos.length === 1 ? p.tamanhos[0] : null,
        valorBaseFormatado: format(p.valorBase),
        disponivel: produtoDisponivel,
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
