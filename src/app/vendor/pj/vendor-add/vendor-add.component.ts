import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EnderecosService } from './../../../enderecos/enderecos.service';
import { VendorService } from './../../vendor.service';

@Component({
  selector: 'app-vendor-add',
  templateUrl: './vendor-add.component.html',
  styleUrls: ['./vendor-add.component.scss']
})
export class VendorAddComponent {
  company: any;
  endereco: any;

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

  inputUf = false;
  inputCidade = false;
  inputBairro = false;
  inputLogradouro = false;

  constructor(
    private formBuilder: FormBuilder,
    private enderecosService: EnderecosService,
    private vendorService: VendorService,
    private router: Router,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private _adapter: DateAdapter<any>,
    @Inject(MAT_DATE_LOCALE) private _locale: string,
  ) {

    this._locale = 'pt-BR';
    this._adapter.setLocale(this._locale);

  }

  onSubmit() {
    this.vendorService.savePJ(this.form.value)
      .subscribe(data => {
        this.company = data,
          this.showSnackBar("Fornecedor criado com sucesso!"),
          this.router.navigate(['/fornecedor/pj/', this.company.id], { skipLocationChange: false });
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
      dataAbertura: formData.dataAbertura,
      email: formData.email,
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
