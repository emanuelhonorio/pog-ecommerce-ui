import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateEstoqueDTO } from '../models/api-models';

@Injectable({
  providedIn: 'root'
})
export class EstoquesService {

  private baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  create(estoqueDTO: CreateEstoqueDTO) {
    return this.http.post(`${this.baseApiUrl}/estoques`, estoqueDTO).toPromise();
  }

  update(estoqueId: number, estoque: CreateEstoqueDTO) {
    return this.http.put(`${this.baseApiUrl}/estoques/${estoqueId}`, estoque).toPromise();
  }

  delete(estoqueId: number) {
    return this.http.delete(`${this.baseApiUrl}/estoques/${estoqueId}`).toPromise();
  }
}
