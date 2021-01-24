import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cor } from '../models/api-models';

@Injectable({
  providedIn: 'root',
})
export class CoresService {
  private baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  list(produtoId: number) {
    return this.http
      .get(`${this.baseApiUrl}/produtos/${produtoId}/cores`)
      .toPromise();
  }

  create(produtoId: number, cor: Cor) {
    return this.http
      .post(`${this.baseApiUrl}/produtos/${produtoId}/cores`, cor)
      .toPromise();
  }
}
