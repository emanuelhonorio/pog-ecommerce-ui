import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CorI } from '../models/api-models';

@Injectable({
  providedIn: 'root'
})
export class CoresService {

  private baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  list(produtoId: number) {
    return this.http.get(`${this.baseApiUrl}/produtos/${produtoId}/cores`).toPromise();
  }

  create(produtoId: number, cor: CorI) {
    return this.http.post(`${this.baseApiUrl}/produtos/${produtoId}/cores`, cor).toPromise();
  }
}
