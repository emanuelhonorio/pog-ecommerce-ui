import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CompraDTO, CompraFilter } from '../models/api-models';

@Injectable({
  providedIn: 'root',
})
export class ComprasService {
  private baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  private getFilterParams(compraFilter: CompraFilter): HttpParams {
    let params = new HttpParams();

    if (compraFilter.id) {
      params = params.append('id', '' + compraFilter.id);
    }

    if (compraFilter.status) {
      params = params.append('status', compraFilter.status);
    }

    if (compraFilter.deleted != null && compraFilter.deleted != undefined) {
      params = params.append('deleted', '' + compraFilter.deleted);
    }

    if (compraFilter.entregue != null && compraFilter.entregue != undefined) {
      params = params.append('entregue', '' + compraFilter.entregue);
    }

    if (compraFilter.data) {
      const validDateFormat = compraFilter.data.toISOString().split('T')[0];
      params = params.append('data', validDateFormat);
    }

    return params;
  }

  list(compraFilter: CompraFilter) {
    const params = this.getFilterParams(compraFilter);

    return this.http
      .get(`${this.baseApiUrl}/me/compras`, { params })
      .toPromise();
  }

  listOfAllUsers(compraFilter: CompraFilter) {
    const params = this.getFilterParams(compraFilter);

    return this.http.get(`${this.baseApiUrl}/compras`, { params }).toPromise();
  }

  comprar(compraDTO: CompraDTO) {
    return this.http
      .post(`${this.baseApiUrl}/me/compras`, compraDTO)
      .toPromise();
  }

  atualizarStatus(id, status) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http
      .put(`${this.baseApiUrl}/compras/${id}/status`, `"${status}"`, {
        headers,
      })
      .toPromise();
  }

  deletar(id) {
    return this.http.delete(`${this.baseApiUrl}/compras/${id}`).toPromise();
  }
}
