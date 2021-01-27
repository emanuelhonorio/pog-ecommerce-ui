import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CompraDTO } from '../models/api-models';

@Injectable({
  providedIn: 'root',
})
export class ComprasService {
  private baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get(`${this.baseApiUrl}/me/compras`).toPromise();
  }

  comprar(compraDTO: CompraDTO) {
    return this.http
      .post(`${this.baseApiUrl}/me/compras`, compraDTO)
      .toPromise();
  }
}
