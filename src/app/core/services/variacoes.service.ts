import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { CreateVariacaoDTO } from '../models/api-models'

@Injectable({
  providedIn: 'root'
})
export class VariacoesService {

  private baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  create(variacaoDTO: CreateVariacaoDTO) {
    return this.http.post(`${this.baseApiUrl}/variacoes`, variacaoDTO).toPromise();
  }

  update(variacaoId: number, variacao: CreateVariacaoDTO) {
    return this.http.put(`${this.baseApiUrl}/variacoes/${variacaoId}`, variacao).toPromise();
  }

  delete(variacaoId: number) {
    return this.http.delete(`${this.baseApiUrl}/variacoes/${variacaoId}`).toPromise();
  }
}
