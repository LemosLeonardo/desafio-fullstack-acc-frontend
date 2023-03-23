import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from './model/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private readonly API_COMPANY = 'api/company'

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Company[]>(this.API_COMPANY);
  }

  getById(id: string) {
    return this.http.get<Company>(`${this.API_COMPANY}/${id}`);
  }

  getCount() {
    return this.http.get(`${this.API_COMPANY}/total`);
  }

  delete(id: string) {
    return this.http.delete(`${this.API_COMPANY}/${id}`);
  }

  save(record: any) {
    if (record.id) {
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Partial<Company>) {
    return this.http.post<Company>(this.API_COMPANY, record);
  }

  private update(record: Partial<Company>) {
    return this.http.put<Company>(`${this.API_COMPANY}/${record.id}`, record)
  }

}
