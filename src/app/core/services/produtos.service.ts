import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateProdutoDTO } from '../models/api-models';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }


  list(): Promise<any> {
    return <Promise<any>>this.http.get(`${this.baseApiUrl}/produtos`).toPromise()
  }

  findById(produtoId: number): Promise<any> {
    return <Promise<any>>this.http.get(`${this.baseApiUrl}/produtos/${produtoId}`).toPromise()
  }

  create(produto: CreateProdutoDTO) {
    return this.http.post(`${this.baseApiUrl}/produtos`, produto).toPromise()
  }

  update(produtoId: number, produto: CreateProdutoDTO) {
    return this.http.put(`${this.baseApiUrl}/produtos/${produtoId}`, produto).toPromise()
  }

  delete(produtoId: number) {
    return this.http.delete(`${this.baseApiUrl}/produtos/${produtoId}`).toPromise()
  }
}
