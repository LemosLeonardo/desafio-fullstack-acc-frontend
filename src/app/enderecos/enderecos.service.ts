import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endereco } from './model/endereco';

@Injectable({
  providedIn: 'root'
})

export class EnderecosService {
  private readonly API_CEP = 'http://cep.la/'
  private readonly API_ENDERECO = 'api/enderecos';

  constructor(private http: HttpClient) { }

  getById(id: string) {
    return this.http.get<Endereco[]>(`${this.API_ENDERECO}/${id}`);
  }

  searchCEP(cep: any) {
    return this.http.get(`${this.API_CEP}/${cep}`, { headers: { Accept: 'application/json' }, responseType: 'json' });
  }

  create(record: any) {
    return this.http.post<Endereco>(this.API_ENDERECO, record)
  }

  update(record: any) {
    return this.http.put<Endereco>(`${this.API_ENDERECO}/${record.id}`, record);
  }
}
