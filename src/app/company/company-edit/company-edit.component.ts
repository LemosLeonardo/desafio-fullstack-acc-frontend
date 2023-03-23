import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { EnderecosService } from './../../enderecos/enderecos.service';
import { CompanyService } from './../company.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {
  company: any;
  endereco: any;
  idCompany: any;

  form = this.formBuilder.group(
    {
      id: '',
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
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
    this.route.params.subscribe(
      params => this.idCompany = params['id']);
  }

  ngOnInit(): void {
    this.getCompany(this.idCompany);
  }

  onSubmit() {
    this.companyService.save(this.form.value)
      .subscribe(data => {
        this.company = data,
          this.showSnackBar("Empresa atualizada com sucesso!")
      });
  }

  onDelete(id: string) {
    this.companyService.delete(id).subscribe();
    this.showSnackBar("Empresa deletada com sucesso!");
    this.router.navigate(['/empresas'], { skipLocationChange: false });
  }

  getCompany(id: any) {
    this.companyService.getById(id)
      .subscribe(
        data => { this.company = data, this.updateForm(this.company) });
  }

  updateForm(company: any) {
    this.form.setValue({
      id: company.id,
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

  getEnderecoPorCEP() {
    const cep = this.form.value.cep;
    if (cep?.length == 8 && cep != '') {
      this.enderecosService.searchCEP(cep)
        .subscribe(data => {
          this.endereco = data,
            this.updateEndereco(this.endereco)
        })
    }
  }

  updateEndereco(endereco: any) {
    var formData: any = this.form.value;

    this.form.setValue({
      id: formData.id,
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
