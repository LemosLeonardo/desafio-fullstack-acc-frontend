import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EnderecosService } from 'src/app/enderecos/enderecos.service';

import { Company } from '../model/company';
import { CompanyService } from './../company.service';

@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.scss']
})
export class CompanyAddComponent {
  company: any;
  endereco: any;

  form = this.formBuilder.group(
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

  inputUf = false;
  inputCidade = false;
  inputBairro = false;
  inputLogradouro = false;

  constructor(
    private formBuilder: FormBuilder,
    private companyService: CompanyService,
    private enderecosService: EnderecosService,
    private router: Router,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  onSubmit() {
    this.companyService.save(this.form.value)
      .subscribe(data => {
        this.company = data,
          this.showSnackBar("Empresa criada com sucesso!"),
          this.router.navigate(['/empresa/', this.company.id], { skipLocationChange: false });
      });
  }

  getEnderecoPorCEP() {
    const cep = this.form.value.cep;
    if (cep?.length == 8 && cep != '') {
      this.enderecosService.searchCEP(cep)
        .subscribe(data => {
          this.endereco = data,
            this.updateForm(this.endereco)
        })
    }
  }

  updateForm(endereco: any) {
    var formData: any = this.form.value;

    this.form.setValue({
      cnpj: formData.cnpj,
      nomeFantasia: formData.nomeFantasia,
      cep: endereco.cep,
      uf: endereco.uf,
      cidade: endereco.cidade,
      bairro: endereco.bairro,
      logradouro: endereco.logradouro,
      numero: formData.numero,
      complemento: formData.complemento
    })

    this.changeToReadOnly()
  }

  changeToReadOnly() {
    this.inputUf = true;
    this.inputCidade = true;
    this.inputBairro = true;
    this.inputLogradouro = true;
  }

  private showSnackBar(param: string) {
    this._snackBar.open(
      param,
      "",
      { duration: 3000, horizontalPosition: 'center', verticalPosition: 'top' })
  }
}
