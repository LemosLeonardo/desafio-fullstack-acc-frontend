import { VendorPJ } from './../../model/VendorPJ';
import { VendorService } from './../../vendor.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendor-view',
  templateUrl: './vendor-view.component.html',
  styleUrls: ['./vendor-view.component.scss']
})
export class VendorViewComponent implements OnInit {
  vendorPJ: any;
  idVendorPJ: any;

  form = this.formBuilder.group(
    {
      cnpj: '',
      nomeFantasia: '',
      dataAbertura: '',
      email: '',
      cep: '',
      uf: '',
      cidade: '',
      bairro: '',
      logradouro: '',
      numero: '',
      complemento: ''
    }
  );

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private vendorService: VendorService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
    this.route.params.subscribe(
      params => this.idVendorPJ = params['id']);
  }


  ngOnInit(): void {
    this.getVendor(this.idVendorPJ);
  }

  getVendor(id: any) {
    this.vendorService.getPJById(id)
      .subscribe(
        data => { this.vendorPJ = data, this.updateForm(this.vendorPJ) });
  }

  updateForm(vendor: VendorPJ) {
    this.form.setValue({
      cnpj: vendor.cnpj,
      nomeFantasia: vendor.nomeFantasia,
      dataAbertura: vendor.dataAbertura,
      email: vendor.email,
      cep: vendor.cep,
      uf: vendor.uf,
      cidade: vendor.cidade,
      bairro: vendor.bairro,
      logradouro: vendor.logradouro,
      numero: vendor.numero,
      complemento: vendor.complemento
    })
  }
}
