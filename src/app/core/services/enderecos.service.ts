import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Endereco } from '../models/api-models';

@Injectable({
  providedIn: 'root',
})
export class EnderecosService {
  private baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get(`${this.baseApiUrl}/enderecos`).toPromise();
  }

  create(endereco: Endereco) {
    return this.http.post(`${this.baseApiUrl}/enderecos`, endereco).toPromise();
  }

  update(enderecoId: number, endereco: Endereco) {
    return this.http
      .put(`${this.baseApiUrl}/enderecos/${enderecoId}`, endereco)
      .toPromise();
  }

  delete(enderecoId: number) {
    return this.http
      .delete(`${this.baseApiUrl}/enderecos/${enderecoId}`)
      .toPromise();
  }

  consultarCep(cep: string) {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`).toPromise();
  }
}
