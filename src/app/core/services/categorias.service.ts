import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Categoria } from '../models/api-models';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  private baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  list(): Promise<Categoria[]> {
    return <Promise<Categoria[]>>(
      this.http.get(`${this.baseApiUrl}/categorias`).toPromise()
    );
  }

  create(categoria: Categoria) {
    return this.http
      .post(`${this.baseApiUrl}/categorias`, categoria)
      .toPromise();
  }

  delete(categoriaId: number) {
    return this.http
      .delete(`${this.baseApiUrl}/categorias/${categoriaId}`)
      .toPromise();
  }

  update(categoriaId: number, categoria: Categoria) {
    return this.http
      .put(`${this.baseApiUrl}/categorias/${categoriaId}`, categoria)
      .toPromise();
  }
}
