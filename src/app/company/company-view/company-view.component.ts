import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import { Company } from '../model/company';
import { CompanyService } from './../company.service';

@Component({
  selector: 'app-company-view',
  templateUrl: './company-view.component.html',
  styleUrls: ['./company-view.component.scss']
})
export class CompanyViewComponent implements OnInit {
  company: any;
  idCompany: any;

  companyForm = this.formBuilder.group(
    {
      cnpj: '',
      nomeFantasia: '',
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
    private companyService: CompanyService,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
    this.route.params.subscribe(
      params => this.idCompany = params['id']);
  }

  ngOnInit(): void {
    this.getCompany(this.idCompany);
  }

  getCompany(id: any) {
    this.companyService.getById(id)
      .subscribe(
        data => { this.company = data, this.updateForm(this.company) });
  }

  updateForm(company: Company) {
    this.companyForm.setValue({
      cnpj: company.cnpj,
      nomeFantasia: company.nomeFantasia,
      cep: company.cep,
      uf: company.uf,
      cidade: company.cidade,
      bairro: company.bairro,
      logradouro: company.logradouro,
      numero: company.numero,
      complemento: company.complemento
    })
  }

}
