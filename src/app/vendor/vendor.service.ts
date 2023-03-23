import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { VendorPJ } from './model/VendorPJ';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  private readonly API_VENDOR_PJ = 'api/vendor/pj';
  private readonly API_VENDOR_PF = 'api/vendor/pF';

  constructor(private http: HttpClient) { }

  //VENDOR PJ
  getAllPJ() {
    return this.http.get<VendorPJ[]>(this.API_VENDOR_PJ);
  }

  getPJById(id: string) {
    return this.http.get<VendorPJ>(`${this.API_VENDOR_PJ}/${id}`);
  }

  getCountPJ() {
    return this.http.get(`${this.API_VENDOR_PJ}/total`)
  }

  deletePJ(id: string) {
    return this.http.delete(`${this.API_VENDOR_PJ}/${id}`);
  }

  savePJ(record: any) {
    if (record.id) {
      return this.updatePJ(record);
    }
    return this.createPJ(record);
  }

  private createPJ(record: Partial<VendorPJ>) {
    return this.http.post<VendorPJ>(this.API_VENDOR_PJ, record);
  }

  private updatePJ(record: Partial<VendorPJ>) {
    return this.http.put<VendorPJ>(`${this.API_VENDOR_PJ}/${record.id}`, record);
  }

  //VENDOR PF

}
