import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TamanhoI } from '../models/api-models';

@Injectable({
  providedIn: 'root'
})
export class TamanhosService {

  private baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  list(produtoId: number) {
    return this.http.get(`${this.baseApiUrl}/produtos/${produtoId}/tamanhos`).toPromise();
  }

  create(produtoId: number, tamanho: TamanhoI) {
    return this.http.post(`${this.baseApiUrl}/produtos/${produtoId}/tamanhos`, tamanho).toPromise();
  }
}
